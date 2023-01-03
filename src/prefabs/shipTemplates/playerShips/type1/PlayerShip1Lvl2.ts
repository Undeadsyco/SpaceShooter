
// You can write more code here

/* START OF COMPILED CODE */

import PlayerTemplate from "../PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerShip1Lvl2 extends PlayerTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player_ship1_lvl2.png");

		this.body.setOffset(15, 48);
		this.body.setSize(98, 31, false);

		// this (prefab fields)
		this.shipTexture = {"key":"player","frame":"player_ship1_lvl2.png"};
		this.shipExpAnim = "player_ship1_lvl2_exp";
		this.shipExhaustTexture = {"key":"player","frame":"player_ship1_lvl2_flight4.png"};
		this.shipFlightAnim = "player_ship1_lvl2_flight";
		this.shipTurboAnim = "player_ship1_lvl2_turbo";
		this.exhaustPos = { x:-57,y:-4 };
		this.weaponFirePos = { x:40,y:12 };
		this.shipDamageAnim = "player_ship1_lvl2_damage";
		this.modifier = 1.25;

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
