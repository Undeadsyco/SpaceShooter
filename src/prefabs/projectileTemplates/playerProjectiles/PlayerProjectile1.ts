
// You can write more code here

/* START OF COMPILED CODE */

import PlayerProjectileTemplate from "./PlayerProjectileTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerProjectile1 extends PlayerProjectileTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player_shot1.png");

		this.body.setOffset(23, 32);
		this.body.setSize(25, 2, false);

		// this (prefab fields)
		this.fireAnim = "player_shot1_fire";
		this.expAnim = "player_shot1_exp";
		this.img = {"key":"player","frame":"player_shot1.png"};

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
