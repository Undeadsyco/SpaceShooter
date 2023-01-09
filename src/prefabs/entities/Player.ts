
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import InitPlayer from "../../components/InitPlayer";
import PlayerTemplate from "../shipTemplates/playerShips/PlayerTemplate";
/* START-USER-IMPORTS */
import PlayerTypeTemplates from "../shipTemplates/playerShips";
import EventCenter from "../../utils/EventCenter";
/* END-USER-IMPORTS */

export default interface Player {

	body: Phaser.Physics.Arcade.Body;
}

export default class Player extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.pushable = false;
		this.body.setSize(64, 64, false);

		// template
		const template = new PlayerTemplate(scene, 0, 0);
		this.add(template);

		// exhaust
		const exhaust = scene.add.sprite(-32, 0, "_MISSING");
		this.add(exhaust);

		// shootBtn
		const shootBtn = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// upBtn
		const upBtn = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// downBtn
		const downBtn = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// leftBtn
		const leftBtn = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightBtn
		const rightBtn = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// this (components)
		new InitPlayer(this);

		this.template = template;
		this.exhaust = exhaust;
		this.shootBtn = shootBtn;
		this.upBtn = upBtn;
		this.downBtn = downBtn;
		this.leftBtn = leftBtn;
		this.rightBtn = rightBtn;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public template: PlayerTemplate;
	private exhaust: Phaser.GameObjects.Sprite;
	public shootBtn: Phaser.Input.Keyboard.Key;
	private upBtn: Phaser.Input.Keyboard.Key;
	private downBtn: Phaser.Input.Keyboard.Key;
	private leftBtn: Phaser.Input.Keyboard.Key;
	private rightBtn: Phaser.Input.Keyboard.Key;
	public shipType: "1" | "2" | "3" = "1";
	public shipLvl: "1" | "2" | "3" | "4" | "5" | "6" | "7" = "1";

	/* START-USER-CODE */

	private emitter: EventCenter = EventCenter.getInstance();

	// Write your code here.

	create() {
		this.setTemplate();
		this.setExhaust();
		this.setBody();
		this.setEvents();
	}

	update(time: number, delta: number) {
		this.template.update(time, delta);
		this.shootWeapon();
		this.moveShip();
	}

	setTemplate(): this {
		const oldTemplate = this.template;
		this.template = new PlayerTypeTemplates[parseInt(this.shipType) - 1][parseInt(this.shipLvl) - 1](this.scene);
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
		this.body.setOffset(-(body.width * 0.5), -(body.height * 0.5))
	}

	setEvents() {
		this.template.on(`${Phaser.Animations.Events.ANIMATION_COMPLETE_KEY}${this.template.shipExpAnim}`, () => {
			this.emitter.emit('gameOver');
		});
	}

	setType(type: "1" | "2" | "3"): this {
		this.shipType = type;
		return this;
	}

	setLevel(lvl: "1" | "2" | "3" | "4" | "5" | "6" | "7"): this {
		this.shipLvl = lvl;
		return this;
	}

	levelUp() {
		const level = parseInt(this.shipLvl);
		if (level < 7) this.shipLvl = (level + 1).toString() as "1" | "2" | "3" | "4" | "5" | "6" | "7";
	}

	shootWeapon() {
		const { projectile, x, y, weaponFirePos: { x: wepX, y: wepY } } = this.template;
		if (Phaser.Input.Keyboard.JustDown(this.shootBtn)) {
			this.emitter.emit('createProjectile', new projectile(this.scene, x + this.x + wepX, y + this.y + wepY).setParent(this));
		}
	}

	moveShip() {
		if (this.leftBtn.isDown) this.body.setVelocityX(-this.template.speed);
		else if (this.rightBtn.isDown) this.body.setVelocityX(this.template.speed);
		else this.body.setVelocityX(0);

		if (this.upBtn.isDown) this.body.setVelocityY(-this.template.speed);
		else if (this.downBtn.isDown) this.body.setVelocityY(this.template.speed);
		else this.body.setVelocityY(0);

		this.setPosition(this.x + this.template.x, this.y + this.template.y);
		this.template.setPosition(0, 0);
	}

	loseHealth() {
		this.template.loseHealth();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
