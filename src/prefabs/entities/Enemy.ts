
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import InitEnemy from "../../components/InitEnemy";
import EnemyTemplate from "../shipTemplates/enemyShips/EnemyTemplate";
/* START-USER-IMPORTS */
import EnemyTemplates from "../shipTemplates/enemyShips";
import EventCenter from "../../utils/EventCenter";
/* END-USER-IMPORTS */

export default interface Enemy {

	body: Phaser.Physics.Arcade.Body;
}

export default class Enemy extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.pushable = false;
		this.body.setSize(64, 64, false);

		// template
		const template = new EnemyTemplate(scene, 0, 0);
		this.add(template);

		// exhaust
		const exhaust = scene.add.sprite(32, 0, "_MISSING");
		exhaust.flipX = true;
		this.add(exhaust);

		// this (components)
		new InitEnemy(this);

		this.template = template;
		this.exhaust = exhaust;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public template: EnemyTemplate;
	private exhaust: Phaser.GameObjects.Sprite;
	public shipType: "1" | "2" | "3" | "4" | "5" | "6" = "1";

	/* START-USER-CODE */

	// Write your code here.
	private emitter: EventCenter = EventCenter.getInstance();
	private interval: number = 1000 / 0.75;
	private timer: number = 0;

	setTemplate(): this {
		const oldTemplate = this.template;
		this.shipType = Phaser.Math.Between(1, 6).toString() as ("1" | "2" | "3" | "4" | "5" | "6");
		this.template = new EnemyTemplates[parseInt(this.shipType) - 1](this.scene);
		this.add(this.template);
		oldTemplate.destroy();
		return this;
	}

	setExhaust(): this {
		const { exhaustPos: { x, y }, shipExhaustTexture: { key, frame }, shipFlightAnim } = this.template;
		this.exhaust.setTexture(key, frame);
		this.exhaust.setPosition(x, y);
		this.exhaust.anims.play(shipFlightAnim);
		return this;
	}

	setBody() {
		const { body } = this.template;
		this.body.setSize(body.width, body.height);
		this.body.setOffset(-(body.width * 0.5), -(body.height * 0.5));
	}

	setupEvents() {
		this.template.on(`${Phaser.Animations.Events.ANIMATION_COMPLETE_KEY}${this.template.shipExpAnim}`, () => {
			this.emitter.emit('removeEnemy', this);
		});
	}

	moveShip() {
		this.body.setVelocityX(this.template.speed);
	}

	shootWeapon() {
		const { projectile, x, y, weaponFirePos: { x: wepX, y: wepY } } = this.template;
		this.emitter.emit('createProjectile', new projectile(this.scene, x + this.x + wepX, y + this.y + wepY).setParent(this));
	}

	update(time: number, delta: number) {
		this.template.update(time, delta);
		if (this.template.health <= 0) this.emitter.emit('expShip');
		else {
			const world = this.scene?.physics.world.bounds;
			if (world && (this.x + (this.template.width * 0.4) < world.x)) this.emitter.emit('removeEnemy', this);

			this.timer += delta
			if (this.timer > this.interval) this.shootWeapon(), this.timer = 0;
		}
	}

	loseHealth() {
		this.template.loseHealth();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
