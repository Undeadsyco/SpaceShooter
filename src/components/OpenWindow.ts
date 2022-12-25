
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OpenWindow extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__OpenWindow"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): OpenWindow {
		return (gameObject as any)["__OpenWindow"];
	}

	private gameObject: Phaser.GameObjects.Image;
	public window!: Phaser.GameObjects.Container;

	/* START-USER-CODE */
	// Write your code here.

	awake() {
		this.gameObject.setInteractive().on('pointerdown', () => {
			this.window.setVisible(true);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
