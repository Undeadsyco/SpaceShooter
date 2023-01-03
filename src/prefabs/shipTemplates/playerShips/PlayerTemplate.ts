
// You can write more code here

/* START OF COMPILED CODE */

import ShipTemplate from "../ShipTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerTemplate extends ShipTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "__DEFAULT", frame);

		// this (prefab fields)
		this.shipProjectileTexture = {"key":"player","frame":"player_shot1.png"};
		this.projectileFireAnim = "player_shot1_fire";
		this.projectileExpAnim = "player_shot1_exp";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public shipDamageAnim: string = "";
	public shield: number = 10;
	public energy: number = 10;
	public modifier: number = 1;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
