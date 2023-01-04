
// You can write more code here

/* START OF COMPILED CODE */

import EnemyTemplate from "./EnemyTemplate";
/* START-USER-IMPORTS */
import EnemyProjectile5 from "../../../prefabs/projectileTemplates/enemyProjectiles/EnemyProjectile5";
/* END-USER-IMPORTS */

export default class EnemyShip5 extends EnemyTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "enemies", frame ?? "enemy_ship5.png");

		this.body.setOffset(11, 33);
		this.body.setSize(105, 61, false);

		// this (prefab fields)
		this.shipTexture = {"key":"enemies","frame":"enemy_ship5.png"};
		this.shipExpAnim = "enemy_ship5_exp";
		this.shipExhaustTexture = {"key":"enemies","frame":"enemy_ship5_flight1.png"};
		this.shipFlightAnim = "enemy_ship5_flight";
		this.shipTurboAnim = "enemy_ship5_turbo";
		this.exhaustPos = {x:68,y:8};
		this.weaponFirePos = {x:-54,y:8};
		this.projectile = EnemyProjectile5;

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
