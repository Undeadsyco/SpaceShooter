
// You can write more code here

/* START OF COMPILED CODE */

import PlayerTemplate from "../PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerShip1Lvl5 extends PlayerTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player_ship1_lvl5.png");

		this.body.setOffset(13, 40);
		this.body.setSize(101, 48, false);

		// this (prefab fields)
		this.shipTexture = {"key":"player","frame":"player_ship1_lvl5.png"};
		this.shipExpAnim = "player_ship1_lvl5_exp";
		this.shipExhaustTexture = {"key":"player","frame":"player_ship1_lvl5_flight1.png"};
		this.shipFlightAnim = "player_ship1_lvl5_flight";
		this.shipTurboAnim = "player_ship1_lvl5_turbo";
		this.exhaustPos = { x:-61,y:0 };
		this.weaponFirePos = { x:46,y:20 };
		this.shipDamageAnim = "player_ship1_lvl5_damage";
		this.modifier = 2;

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
