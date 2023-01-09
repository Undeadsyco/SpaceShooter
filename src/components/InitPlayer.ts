
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Player from "../prefabs/entities/Player";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InitPlayer extends UserComponent {

	constructor(gameObject: Player) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__InitPlayer"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Player): InitPlayer {
		return (gameObject as any)["__InitPlayer"];
	}

	private gameObject: Player;

	/* START-USER-CODE */

	start() {
		this.gameObject.create();
	}

	// Write your code here.

	update(time: number, delta: number) {
		this.gameObject.update(time, delta);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
