
// You can write more code here

/* START OF COMPILED CODE */

import EnemyTemplate from "./EnemyTemplate";
/* START-USER-IMPORTS */
import EnemyProjectile6 from "../../../prefabs/projectileTemplates/enemyProjectiles/EnemyProjectile6";
/* END-USER-IMPORTS */

export default class EnemyShip6 extends EnemyTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "enemies", frame ?? "enemy_ship6.png");

		this.body.setOffset(5, 26);
		this.body.setSize(117, 75, false);

		// this (prefab fields)
		this.shipTexture = {"key":"enemies","frame":"enemy_ship6.png"};
		this.shipExpAnim = "enemy_ship6_exp";
		this.shipExhaustTexture = {"key":"enemies","frame":"enemy_ship6_flight1.png"};
		this.shipFlightAnim = "enemy_ship6_flight";
		this.shipTurboAnim = "enemy_ship6_turbo";
		this.exhaustPos = {x:72,y:-1};
		this.weaponFirePos = {x:-60,y:0};
		this.projectile = EnemyProjectile6;

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
