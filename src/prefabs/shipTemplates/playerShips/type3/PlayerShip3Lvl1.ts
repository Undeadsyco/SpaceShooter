
// You can write more code here

/* START OF COMPILED CODE */

import PlayerTemplate from "../PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerShip3Lvl1 extends PlayerTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player_ship3_lvl1.png");

		this.body.setOffset(36, 45);
		this.body.setSize(55, 37, false);

		// this (prefab fields)
		this.shipTexture = {"key":"player","frame":"player_ship3_lvl1.png"};
		this.shipExpAnim = "player_ship3_lvl1_exp";
		this.shipExhaustTexture = {"key":"player","frame":"player_ship3_lvl1_flight1.png"};
		this.shipFlightAnim = "player_ship3_lvl1_flight";
		this.shipTurboAnim = "player_ship3_lvl1_turbo";
		this.exhaustPos = { x:-38,y:2 };
		this.weaponFirePos = { x:18,y:7 };
		this.shipDamageAnim = "player_ship3_lvl1_damage";

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
