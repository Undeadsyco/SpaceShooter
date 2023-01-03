
// You can write more code here

/* START OF COMPILED CODE */

import PlayerTemplate from "../PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerShip1Lvl3 extends PlayerTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player_ship1_lvl3.png");

		this.body.setOffset(16, 45);
		this.body.setSize(95, 38, false);

		// this (prefab fields)
		this.shipTexture = {"key":"player","frame":"player_ship1_lvl3.png"};
		this.shipExpAnim = "player_ship1_lvl3_exp";
		this.shipExhaustTexture = {"key":"player","frame":"player_ship1_lvl3_flight1.png"};
		this.shipFlightAnim = "player_ship1_lvl3_flight";
		this.shipTurboAnim = "player_ship1_lvl3_turbo";
		this.exhaustPos = { x:-54,y:-3 };
		this.weaponFirePos = {x:36,y:16};
		this.shipDamageAnim = "player_ship1_lvl3_damage";
		this.modifier = 1.5;

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
