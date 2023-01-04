
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import InitProjectile from "../../components/InitProjectile";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface ProjectileTemplate {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ProjectileTemplate extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "__DEFAULT", frame);

		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.setSize(32, 32, false);

		// this (components)
		new InitProjectile(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.body.onCollide = true;
		this.body.onWorldBounds = true;
		/* END-USER-CTR-CODE */
	}

	public fireAnim: string = "";
	public expAnim: string = "";
	public img!: {key:string,frame?:string|number};
	public speed: number = -200;

	/* START-USER-CODE */

	// Write your code here.

	getAnimations() { return ({ fireAnim: this.fireAnim, expAnim: this.expAnim }); }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
