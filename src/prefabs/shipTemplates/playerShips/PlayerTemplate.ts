
// You can write more code here

/* START OF COMPILED CODE */

import ShipTemplate from "../ShipTemplate";
/* START-USER-IMPORTS */
import PlayerProjectileTemplate from "../../../prefabs/projectileTemplates/playerProjectiles/PlayerProjectileTemplate";
/* END-USER-IMPORTS */

export default class PlayerTemplate extends ShipTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "__DEFAULT", frame);

		this.body.collideWorldBounds = true;

		// this (prefab fields)
		this.projectile = PlayerProjectileTemplate;

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

	playAnim(anim: 'damage'|'exp') {
		anim === 'damage' ? this.anims.play(this.shipDamageAnim) : super.playAnim(); 
	}

	loseHealth() {
		this.health -= 5;
		if (this.health <= 0) this.playAnim('exp');
		else this.playAnim('damage');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
