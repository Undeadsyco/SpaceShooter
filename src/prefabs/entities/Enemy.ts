
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import InitEnemy from "../../components/InitEnemy";
import EnemyTemplate from "../shipTemplates/enemyShips/EnemyTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Enemy extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

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
	public shipType: "1"|"2"|"3"|"4"|"5"|"6" = "1";

	/* START-USER-CODE */

	// Write your code here.


	getTemplate() { return this.template; }
	setTemplate(template: EnemyTemplate) {
		const oldTemplate = this.template; 
		this.template = template;
		this.add(template);
		oldTemplate.destroy();
	}

	getExhaust() { return this.exhaust; }
	setExhaustTexture(texture: { key: string, frame?: string | number }) {
		this.exhaust.setTexture(texture.key, texture.frame);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
