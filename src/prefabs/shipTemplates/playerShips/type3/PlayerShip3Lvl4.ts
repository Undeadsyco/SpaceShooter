
// You can write more code here

/* START OF COMPILED CODE */

import PlayerTemplate from "../PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerShip3Lvl4 extends PlayerTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player_ship3_lvl4.png");

		this.body.setOffset(18, 40);
		this.body.setSize(91, 48, false);

		// this (prefab fields)
		this.shipTexture = {"key":"player","frame":"player_ship3_lvl4.png"};
		this.shipExpAnim = "player_ship3_lvl4_exp";
		this.shipExhaustTexture = {"key":"player","frame":"player_ship3_lvl4_flight1.png"};
		this.shipFlightAnim = "player_ship3_lvl4_flight";
		this.shipTurboAnim = "player_ship3_lvl4_turbo";
		this.exhaustPos = { x:-58,y:-6 };
		this.weaponFirePos = { x:40,y:12 };
		this.shipDamageAnim = "player_ship1_lvl4_damage";
		this.modifier = 1.75;

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
