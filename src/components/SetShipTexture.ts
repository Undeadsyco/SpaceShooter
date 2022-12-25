
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SetShipTexture extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__SetShipTexture"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.setTexture(this.shipTexture.key, this.shipTexture.frame);
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): SetShipTexture {
		return (gameObject as any)["__SetShipTexture"];
	}

	private gameObject: Phaser.GameObjects.Image;
	public shipTexture: {key:string,frame?:string|number} = {"key":"player","frame":"player_ship1_lvl1.png"};

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
