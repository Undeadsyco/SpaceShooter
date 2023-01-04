
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import EnemyTemplate from "../shipTemplates/enemyShips/EnemyTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Enemy extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// enemyTemplate
		const enemyTemplate = new EnemyTemplate(scene, 0, 0);
		this.add(enemyTemplate);

		// sprite_1
		const sprite_1 = scene.add.sprite(32, 0, "_MISSING");
		sprite_1.flipX = true;
		this.add(sprite_1);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
