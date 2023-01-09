
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
		this.gameObject.setEvents();
		this.gameObject.setVelocityX(this.gameObject.parent.body.velocity.x);
		this.gameObject.playAnim('fire');
	}

	protected update(time: number, delta: number): void {
		this.gameObject.update(time, delta);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
