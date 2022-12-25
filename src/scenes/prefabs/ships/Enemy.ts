
// You can write more code here

/* START OF COMPILED CODE */

import ShipTemplate from "./ShipTemplate";
import SetShipTexture from "../../../components/SetShipTexture";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Enemy extends ShipTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 34, y ?? 34, texture || "enemies", frame ?? "enemy_ship1.png");

		// this (components)
		const thisSetShipTexture = SetShipTexture.getComponent(this);
		thisSetShipTexture.shipTexture = {"key":"enemies","frame":"enemy_ship1.png"};

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
