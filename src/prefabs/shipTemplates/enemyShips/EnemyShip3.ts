
// You can write more code here

/* START OF COMPILED CODE */

import EnemyTemplate from "./EnemyTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EnemyShip3 extends EnemyTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "enemies", frame ?? "enemy_ship3.png");

		this.body.setOffset(21, 44);
		this.body.setSize(86, 39, false);

		// this (prefab fields)
		this.shipTexture = {"key":"enemies","frame":"enemy_ship3.png"};
		this.shipExpAnim = "enemy_ship3_exp";
		this.shipExhaustTexture = {"key":"enemies","frame":"enemy_ship3_flight1.png"};
		this.shipFlightAnim = "enemy_ship3_flight";
		this.shipTurboAnim = "enemy_ship3_turbo";
		this.shipProjectileTexture = {"key":"enemies","frame":"enemy_ship3_shot.png"};
		this.projectileFireAnim = "enemy_ship3_shot_fire";
		this.projectileExpAnim = "enemy_ship3_shot_exp";

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
