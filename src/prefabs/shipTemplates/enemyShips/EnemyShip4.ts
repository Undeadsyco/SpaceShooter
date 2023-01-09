
// You can write more code here

/* START OF COMPILED CODE */

import EnemyTemplate from "./EnemyTemplate";
/* START-USER-IMPORTS */
import EnemyProjectile4 from "../../../prefabs/projectileTemplates/enemyProjectiles/EnemyProjectile4";
/* END-USER-IMPORTS */

export default class EnemyShip4 extends EnemyTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "enemies", frame ?? "enemy_ship4.png");

		this.body.setOffset(16, 41);
		this.body.setSize(96, 46, false);

		// this (prefab fields)
		this.shipTexture = {"key":"enemies","frame":"enemy_ship4.png"};
		this.shipExpAnim = "enemy_ship4_exp";
		this.shipExhaustTexture = {"key":"enemies","frame":"enemy_ship4_flight1.png"};
		this.shipFlightAnim = "enemy_ship4_flight";
		this.shipTurboAnim = "enemy_ship4_turbo";
		this.exhaustPos = {x:64,y:1};
		this.weaponFirePos = {x:-50,y:4};
		this.projectile = EnemyProjectile4;

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
