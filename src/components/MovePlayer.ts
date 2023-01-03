
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Player from "../prefabs/entities/Player";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MovePlayer extends UserComponent {

	constructor(gameObject: Player) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__MovePlayer"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Player): MovePlayer {
		return (gameObject as any)["__MovePlayer"];
	}

	private gameObject: Player;
	public vX: number = 0;
	public vY: number = 0;

	/* START-USER-CODE */

	// Write your code here.

	update() {
		const template = this.gameObject.getTemplate();
		const { speed } = this.gameObject;
		const {
			upBtn: { isDown: upIsDown },
			downBtn: { isDown: downIsDown },
			leftBtn: { isDown: leftIsDown },
			rightBtn: { isDown: rightIsDown },
		} = this.gameObject.getInputs();

		if (upIsDown || downIsDown) {
			if (upIsDown) this.vY = -speed.y;
			if (downIsDown) this.vY = speed.y;
		} else this.vY = 0;
		if (leftIsDown || rightIsDown) {
			if (leftIsDown) this.vX = -speed.x;
			if (rightIsDown) this.vX = speed.x;
		} else this.vX = 0;

		template.setVelocity(this.vX, this.vY);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
