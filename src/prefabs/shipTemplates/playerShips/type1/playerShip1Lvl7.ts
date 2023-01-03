
// You can write more code here

/* START OF COMPILED CODE */

import PlayerTemplate from "../PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class playerShip1Lvl7 extends PlayerTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player_ship1_lvl7.png");

		this.body.setOffset(1, 33);
		this.body.setSize(125, 61, false);

		// this (prefab fields)
		this.shipTexture = {"key":"player","frame":"player_ship1_lvl7.png"};
		this.shipExpAnim = "player_ship1_lvl7_exp";
		this.shipExhaustTexture = {"key":"player","frame":"player_ship1_lvl7_flight1.png"};
		this.shipFlightAnim = "player_ship1_lvl7_flight";
		this.shipTurboAnim = "player_ship1_lvl7_turbo";
		this.exhaustPos = { x:-58,y:-1 };
		this.weaponFirePos = { x:58,y:16 };
		this.shipDamageAnim = "player_ship1_lvl7_damage";
		this.modifier = 2.5;

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
