
// You can write more code here

/* START OF COMPILED CODE */

import PlayerTemplate from "../PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerShip3Lvl6 extends PlayerTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player_ship3_lvl6.png");

		this.body.setOffset(7, 34);
		this.body.setSize(113, 60, false);

		// this (prefab fields)
		this.shipTexture = {"key":"player","frame":"player_ship3_lvl6.png"};
		this.shipExpAnim = "player_ship3_lvl6_exp";
		this.shipExhaustTexture = {"key":"player","frame":"player_ship3_lvl6_flight1.png"};
		this.shipFlightAnim = "player_ship3_lvl6_flight";
		this.shipTurboAnim = "player_ship3_lvl6_turbo";
		this.exhaustPos = { x:-70,y:5 };
		this.weaponFirePos = { x:52,y:19 };
		this.shipDamageAnim = "player_ship3_lvl6_damage";
		this.modifier = 2.25;

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
