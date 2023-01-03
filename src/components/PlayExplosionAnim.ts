
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import ShipTemplate from "../prefabs/shipTemplates/ShipTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayExplosionAnim extends UserComponent {

	constructor(gameObject: ShipTemplate) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__PlayExplosionAnim"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: ShipTemplate): PlayExplosionAnim {
		return (gameObject as any)["__PlayExplosionAnim"];
	}

	private gameObject: ShipTemplate;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
