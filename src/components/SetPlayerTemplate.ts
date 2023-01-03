
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Player from "../prefabs/entities/Player";
/* START-USER-IMPORTS */
import PlayerTypeTemplates from "../prefabs/shipTemplates/playerShips";
/* END-USER-IMPORTS */

export default class SetPlayerTemplate extends UserComponent {

	constructor(gameObject: Player) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__SetPlayerTemplate"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Player): SetPlayerTemplate {
		return (gameObject as any)["__SetPlayerTemplate"];
	}

	private gameObject: Player;

	/* START-USER-CODE */

	// Write your code here.

	start() {
		const { shipLvl, shipType } = this.gameObject;
		const currentTemplate = this.gameObject.getTemplate();
		const newTemplate = new PlayerTypeTemplates[parseInt(shipType)-1][parseInt(shipLvl)-1](this.gameObject.scene, currentTemplate.x, currentTemplate.y);
		this.gameObject.setTemplate(newTemplate);
		currentTemplate.destroy();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
