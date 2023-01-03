
// You can write more code here

/* START OF COMPILED CODE */

import EnemyTemplate from "./EnemyTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EnemyShip2 extends EnemyTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "enemies", frame ?? "enemy_ship2.png");

		this.body.setOffset(25, 47);
		this.body.setSize(77, 34, false);

		// this (prefab fields)
		this.shipTexture = {"key":"enemies","frame":"enemy_ship2.png"};
		this.shipExpAnim = "enemy_ship2_exp";
		this.shipExhaustTexture = {"key":"enemies","frame":"enemy_ship2_flight1.png"};
		this.shipFlightAnim = "enemy_ship2_flight";
		this.shipTurboAnim = "enemy_ship2_turbo";
		this.shipProjectileTexture = {"key":"enemies","frame":"enemy_ship2_shot.png"};
		this.projectileFireAnim = "enemy_ship2_shot_fire";
		this.projectileExpAnim = "enemy_ship2_shot_exp";

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
