
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Enemy from "../prefabs/entities/Enemy";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InitEnemy extends UserComponent {

	constructor(gameObject: Enemy) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__InitEnemy"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Enemy): InitEnemy {
		return (gameObject as any)["__InitEnemy"];
	}

	private gameObject: Enemy;

	/* START-USER-CODE */

	// Write your code here.
	
	start() {
		this.gameObject.setTemplate();
		this.gameObject.setExhaust();
		this.gameObject.setBody();
		this.gameObject.moveShip();
		this.gameObject.setupEvents();
	}

	protected update(time: number, delta: number): void {
		this.gameObject.update(time, delta);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
