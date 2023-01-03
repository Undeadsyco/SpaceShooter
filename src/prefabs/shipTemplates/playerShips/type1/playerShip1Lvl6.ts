
// You can write more code here

/* START OF COMPILED CODE */

import PlayerTemplate from "../PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class playerShip1Lvl6 extends PlayerTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 1, y ?? 1, texture || "player", frame ?? "player_ship1_lvl6.png");

		this.body.setOffset(2, 38);
		this.body.setSize(123, 52, false);

		// this (prefab fields)
		this.shipTexture = {"key":"player","frame":"player_ship1_lvl6.png"};
		this.shipExpAnim = "player_ship1_lvl6_exp";
		this.shipExhaustTexture = {"key":"player","frame":"player_ship1_lvl6.png"};
		this.shipFlightAnim = "player_ship1_lvl6_flight";
		this.shipTurboAnim = "player_ship1_lvl6_turbo";
		this.exhaustPos = { x:-46,y:9 };
		this.weaponFirePos = { x:58,y:20  };
		this.shipDamageAnim = "player_ship1_lvl6_damage";
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
