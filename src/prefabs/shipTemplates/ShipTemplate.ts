
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import ProjectileTemplate from "../projectileTemplates/ProjectileTemplate";
import EventCenter from "../../utils/EventCenter";
/* END-USER-IMPORTS */

export default interface ShipTemplate {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ShipTemplate extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "__DEFAULT", frame);

		scene.physics.add.existing(this, false);
		this.body.mass = 10;
		this.body.pushable = false;
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

	private emitter: EventCenter = EventCenter.getInstance();

	// Write your code here.

	update(time: number, delta: number) {
		super.preUpdate(time, delta);
	}

	setShipTexture() {
		const { shipTexture: { key, frame } } = this;
		this.setTexture(key, frame);
	}

	playAnim(anim?: string) {
		this.anims.play(this.shipExpAnim, true);
	}

	loseHealth() {
		console.log('adjust template health', this.health)
		this.health -= 5;
		if (this.health <= 0) this.playAnim();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
