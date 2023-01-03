
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Player from "../prefabs/entities/Player";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FirePlayerWeapon extends UserComponent {

	constructor(gameObject: Player) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__FirePlayerWeapon"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Player): FirePlayerWeapon {
		return (gameObject as any)["__FirePlayerWeapon"];
	}

	private gameObject: Player;
	public timer: number = 0;
	public interval: number = 10;

	/* START-USER-CODE */

	// Write your code here.

	update(time: number, delta: number) {
		if (this.gameObject.shootBtn.isDown && this.timer > 1000 / this.interval) this.fireProjectile();
		else this.timer += delta;
		console.log(this.timer)
	}

	fireProjectile() {
		const template = this.gameObject.getTemplate();
		const { shipProjectileTexture, projectileFireAnim, weaponFirePos } = template;
		const temp = this.gameObject.scene.add.sprite(this.gameObject.x + weaponFirePos.x, this.gameObject.y + weaponFirePos.y, shipProjectileTexture.key, shipProjectileTexture.frame);
		const projectile = this.gameObject.scene.physics.add.sprite(this.gameObject.x + weaponFirePos.x, this.gameObject.y + weaponFirePos.y, shipProjectileTexture.key, shipProjectileTexture.frame);
		temp.on(`${Phaser.Animations.Events.ANIMATION_COMPLETE_KEY}${projectileFireAnim}`, () => {
			temp.destroy();
		});
		temp.play(projectileFireAnim);

		projectile.setVelocity(200, 0);
		this.timer = 0;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
