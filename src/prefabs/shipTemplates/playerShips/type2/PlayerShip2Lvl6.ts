
// You can write more code here

/* START OF COMPILED CODE */

import PlayerTemplate from "../PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerShip2Lvl6 extends PlayerTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player_ship2_lvl6.png");

		this.body.setOffset(12, 30);
		this.body.setSize(103, 68, false);

		// this (prefab fields)
		this.shipTexture = {"key":"player","frame":"player_ship2_lvl6.png"};
		this.shipExpAnim = "player_ship2_lvl6_exp";
		this.shipExhaustTexture = {"key":"player","frame":"player_ship2_lvl6_flight1.png"};
		this.shipFlightAnim = "player_ship2_lvl6_flight";
		this.shipTurboAnim = "player_ship2_lvl6_turbo";
		this.exhaustPos = { x:-64,y:-6 };
		this.weaponFirePos = { x:36,y:22 };
		this.shipDamageAnim = "player_ship2_lvl6_damage";
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
