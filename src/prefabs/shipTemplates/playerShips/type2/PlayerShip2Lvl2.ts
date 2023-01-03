
// You can write more code here

/* START OF COMPILED CODE */

import PlayerTemplate from "../PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerShip2Lvl2 extends PlayerTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 1, y ?? 1, texture || "player", frame ?? "player_ship2_lvl2.png");

		this.body.setOffset(21, 43);
		this.body.setSize(86, 42, false);

		// this (prefab fields)
		this.shipTexture = {"key":"player","frame":"player_ship2_lvl2.png"};
		this.shipExpAnim = "player_ship2_lvl2_exp";
		this.shipExhaustTexture = {"key":"player","frame":"player_ship2_lvl2_flight1.png"};
		this.shipFlightAnim = "player_ship2_lvl2_flight";
		this.shipTurboAnim = "player_ship2_lvl2_turbo";
		this.exhaustPos = { x:-64,y:-6 };
		this.weaponFirePos = { x:36,y:19 };
		this.shipDamageAnim = "player_ship2_lvl2_damage";
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
