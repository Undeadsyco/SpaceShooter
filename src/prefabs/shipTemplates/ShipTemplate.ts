
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import SetShipTexture from "../../components/SetShipTexture";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface ShipTemplate {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ShipTemplate extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "__DEFAULT", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(32, 32, false);

		// this (components)
		new SetShipTexture(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public shipTexture!: {key:string,frame?:string|number};
	public shipExpAnim: string = "";
	public shipExhaustTexture!: {key:string,frame?:string|number};
	public shipFlightAnim: string = "";
	public shipTurboAnim: string = "";
	public shipProjectileTexture!: {key:string,frame?:string|number};
	public projectileFireAnim: string = "";
	public projectileExpAnim: string = "";
	public health: number = 10;
	public exhaustPos!: { x:number, y:number };
	public weaponFirePos!: { x:number, y:number };

	/* START-USER-CODE */

	// Write your code here.

	setShipTexture(texture: { key: string, frame?: string | number }) {
		this.setTexture(texture.key, texture.frame);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
