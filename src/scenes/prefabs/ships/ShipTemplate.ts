
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import SetShipTexture from "../../../components/SetShipTexture";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ShipTemplate extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 64, y ?? 64, texture || "player", frame ?? "player_ship1_lvl1.png");

		// this (components)
		new SetShipTexture(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public shipType: "player"|"pirate"|"enemies"|"aliens"|"bosses" = "player";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
