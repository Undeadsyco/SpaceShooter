
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import SetPlayerTemplate from "../../components/SetPlayerTemplate";
import SetPlayerExhaust from "../../components/SetPlayerExhaust";
import FirePlayerWeapon from "../../components/FirePlayerWeapon";
import MovePlayer from "../../components/MovePlayer";
import PlayerTemplate from "../shipTemplates/playerShips/PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Player extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

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
		new SetPlayerTemplate(this);
		const thisSetPlayerExhaust = new SetPlayerExhaust(this);
		thisSetPlayerExhaust.exhaust = exhaust;
		thisSetPlayerExhaust.template = template;
		new FirePlayerWeapon(this);
		new MovePlayer(this);

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

	private template: PlayerTemplate;
	private exhaust: Phaser.GameObjects.Sprite;
	public shootBtn: Phaser.Input.Keyboard.Key;
	private upBtn: Phaser.Input.Keyboard.Key;
	private downBtn: Phaser.Input.Keyboard.Key;
	private leftBtn: Phaser.Input.Keyboard.Key;
	private rightBtn: Phaser.Input.Keyboard.Key;
	public shipType: "1"|"2"|"3" = "1";
	public shipLvl: "1"|"2"|"3"|"4"|"5"|"6"|"7" = "1";
	public speed: {x:number,y:number} = {x:100,y:75};

	/* START-USER-CODE */

	// Write your code here.

	getTemplate() { return this.template; }
	setTemplate(template: PlayerTemplate) {
		this.template = template;
		this.add(template);
	}

	getExhaust() { return this.exhaust; }
	setExhaustTexture(texture: { key: string, frame?: string | number }) {
		this.exhaust.setTexture(texture.key, texture.frame);
	}

	getInputs() { return ({ upBtn: this.upBtn, downBtn: this.downBtn, leftBtn: this.leftBtn, rightBtn: this.rightBtn }) }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
