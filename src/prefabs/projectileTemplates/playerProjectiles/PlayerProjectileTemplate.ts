
// You can write more code here

/* START OF COMPILED CODE */

import ProjectileTemplate from "../ProjectileTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerProjectileTemplate extends ProjectileTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture, frame);

		// this (prefab fields)
		this.speed = 200;

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
