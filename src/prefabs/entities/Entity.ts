
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ShipTemplate from "../shipTemplates/ShipTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Entity extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// template
		const template = new ShipTemplate(scene, 0, 0);
		this.add(template);

		// exhaust
		const exhaust = scene.add.sprite(32, 0, "_MISSING");
		this.add(exhaust);

		this.template = template;
		this.exhaust = exhaust;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public template: ShipTemplate;
	public exhaust: Phaser.GameObjects.Sprite;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
