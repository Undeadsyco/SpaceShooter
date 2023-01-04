
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import ProjectileTemplate from "../projectileTemplates/ProjectileTemplate";
/* END-USER-IMPORTS */

export default interface ShipTemplate {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ShipTemplate extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "__DEFAULT", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(32, 32, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public shipTexture!: {key:string,frame?:string|number};
	public shipExpAnim: string = "";
	public shipExhaustTexture!: {key:string,frame?:string|number};
	public shipFlightAnim: string = "";
	public shipTurboAnim: string = "";
	public health: number = 10;
	public exhaustPos!: { x:number, y:number };
	public weaponFirePos!: { x:number, y:number };
	public projectile: typeof ProjectileTemplate = ProjectileTemplate;
	public speed: number = 200;

	/* START-USER-CODE */

	// Write your code here.

	setShipTexture(texture: { key: string, frame?: string | number }) {
		this.setTexture(texture.key, texture.frame);
	}

	createProjectile(x?: number, y?: number): ProjectileTemplate {
		const projectile = new this.projectile(this.scene, x, y);
		return projectile;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
