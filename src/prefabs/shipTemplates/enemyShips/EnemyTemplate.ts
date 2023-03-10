
// You can write more code here

/* START OF COMPILED CODE */

import ShipTemplate from "../ShipTemplate";
/* START-USER-IMPORTS */
import EnemyProjectileTemplate from "../../../prefabs/projectileTemplates/enemyProjectiles/EnemyProjectileTemplate";
/* END-USER-IMPORTS */

export default class EnemyTemplate extends ShipTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture, frame);

		this.flipX = true;
		this.flipY = false;

		// this (prefab fields)
		this.projectile = EnemyProjectileTemplate;
		this.speed = -100;

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
