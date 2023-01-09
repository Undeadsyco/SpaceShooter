
// You can write more code here

/* START OF COMPILED CODE */

import EnemyProjectileTemplate from "./EnemyProjectileTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EnemyProjectile3 extends EnemyProjectileTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "enemies", frame ?? "enemy_ship3_shot.png");

		this.body.setOffset(13, 26);
		this.body.setSize(18, 15, false);

		// this (prefab fields)
		this.fireAnim = "enemy_ship3_shot_fire";
		this.expAnim = "enemy_ship3_shot_exp";
		this.img = {"key":"enemies","frame":"enemy_ship3_shot.png"};

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
