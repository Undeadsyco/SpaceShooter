
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Player from "../prefabs/entities/Player";
import Phaser from "phaser";
import PlayerTemplate from "../prefabs/shipTemplates/playerShips/PlayerTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SetPlayerExhaust extends UserComponent {

	constructor(gameObject: Player) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__SetPlayerExhaust"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Player): SetPlayerExhaust {
		return (gameObject as any)["__SetPlayerExhaust"];
	}

	private gameObject: Player;
	public exhaust!: Phaser.GameObjects.Sprite;
	public template!: PlayerTemplate;

	/* START-USER-CODE */

	// Write your code here.
	start() {
		this.updateVariables();
		const { shipExhaustTexture, shipFlightAnim } = this.template;

		this.exhaust.setTexture(shipExhaustTexture.key, shipExhaustTexture.frame);
		this.exhaust.play(shipFlightAnim);
	}

	protected update(time: number, delta: number): void {
		const { x,  y, exhaustPos } = this.template;

		this.exhaust.x = x + exhaustPos.x, this.exhaust.y = y + exhaustPos.y;
	}

	updateVariables() {
		const template = this.gameObject.getTemplate();
		const exhaust = this.gameObject.getExhaust();
		this.template = template;
		this.exhaust = exhaust;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
