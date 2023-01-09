
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import InitProjectile from "../../components/InitProjectile";
/* START-USER-IMPORTS */
import EventCenter from "../../utils/EventCenter";
import Enemy from "../entities/Enemy";
import Player from "../entities/Player";
/* END-USER-IMPORTS */

export default interface ProjectileTemplate {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ProjectileTemplate extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "__DEFAULT", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(32, 32, false);

		// this (components)
		new InitProjectile(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public fireAnim: string = "";
	public expAnim: string = "";
	public img!: {key:string,frame?:string|number};
	public speed: number = -200;
	public parent!: Enemy | Player;

	/* START-USER-CODE */

	private emitter: EventCenter = EventCenter.getInstance();

	// Write your code here.

	setParent(parent: Enemy | Player): this {
		this.parent = parent; return this;
	}

	playAnim(anim: 'fire' | 'exp') {
		anim === 'fire' ? this.anims.play(this.fireAnim) : this.anims.play(this.expAnim);
	}

	setEvents() {
		this.on(`${Phaser.Animations.Events.ANIMATION_COMPLETE_KEY}${this.fireAnim}`, () => {
			this.setTexture(this.img.key, this.img.frame);
			this.setVelocityX(this.body.velocity.x + this.speed);
		});

		this.on(`${Phaser.Animations.Events.ANIMATION_COMPLETE_KEY}${this.expAnim}`, () => {
			this.destroy();
		});
	}

	update(time: number, delta: number) {
		const world = this.scene?.physics.world.bounds;
		if (world && (this.x + (this.width * 0.5) < world.x || this.x + (this.width * 0.5) > world.width)) this.emitter.emit('removeProjectile', this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
