
// You can write more code here

/* START OF COMPILED CODE */

import PlayerTemplate from "../PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerShip2Lvl4 extends PlayerTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player_ship2_lvl4.png");

		this.body.setOffset(23, 36);
		this.body.setSize(81, 56, false);

		// this (prefab fields)
		this.shipTexture = {"key":"player","frame":"player_ship2_lvl4.png"};
		this.shipExpAnim = "player_ship2_lvl4_exp";
		this.shipExhaustTexture = {"key":"player","frame":"player_ship2_lvl4_flight1.png"};
		this.shipFlightAnim = "player_ship2_lvl4_flight";
		this.shipTurboAnim = "player_ship2_lvl4_turbo";
		this.exhaustPos = { x:-53,y:-4 };
		this.weaponFirePos = { x:36,y:16 };
		this.shipDamageAnim = "player_ship2_lvl4_damage";
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
