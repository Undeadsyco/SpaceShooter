
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import ProjectileTemplate from "../prefabs/projectileTemplates/ProjectileTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InitProjectile extends UserComponent {

	constructor(gameObject: ProjectileTemplate) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__InitProjectile"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: ProjectileTemplate): InitProjectile {
		return (gameObject as any)["__InitProjectile"];
	}

	private gameObject: ProjectileTemplate;

	/* START-USER-CODE */

	private idleCount: number = 0;
	private lastX: number = 0;

	// Write your code here.

	start() {
		const { img, fireAnim, expAnim, speed } = this.gameObject;
		if (img) this.gameObject.setTexture(img.key, img.frame);
		this.gameObject.on(`${Phaser.Animations.Events.ANIMATION_COMPLETE_KEY}${fireAnim}`, () => {
			if (img) this.gameObject.setTexture(img.key, img.frame);
			this.gameObject.setVelocityX(this.gameObject.body.velocity.x + speed);
		});
		this.gameObject.on(`${Phaser.Animations.Events.ANIMATION_COMPLETE_KEY}${expAnim}`, () => {
			this.scene.events.emit('removeProjectile', this.gameObject);
		});

		this.gameObject.play(fireAnim);
	}

	update() {
		if (this.lastX === this.gameObject.x) this.idleCount++;
		else this.lastX = this.gameObject.x;
		if(this.gameObject.body?.velocity.x === 0) this.gameObject.setVelocityX(this.gameObject.speed);

		if (this.idleCount > 10) this.gameObject.destroy();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
