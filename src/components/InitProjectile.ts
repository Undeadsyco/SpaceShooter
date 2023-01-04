
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

	// Write your code here.

	start() {
		const { img, fireAnim, expAnim, speed } = this.gameObject;
		if (img) this.gameObject.setTexture(img.key, img.frame);
		this.gameObject.on(`${Phaser.Animations.Events.ANIMATION_COMPLETE_KEY}${fireAnim}`, () => {
			if (img) this.gameObject.setTexture(img.key, img.frame);
			this.gameObject.setVelocityX(speed);
		});
		this.gameObject.on(`${Phaser.Animations.Events.ANIMATION_COMPLETE_KEY}${expAnim}`, () => {
			this.scene.events.emit('removeProjectile', this.gameObject);
		});

		this.gameObject.play(fireAnim);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
