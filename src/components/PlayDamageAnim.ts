
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import PlayerTemplate from "../prefabs/shipTemplates/playerShips/PlayerTemplate";
/* START-USER-IMPORTS */
import eventCenter from "../utils/eventEmitter";
/* END-USER-IMPORTS */

export default class PlayDamageAnim extends UserComponent {

	constructor(gameObject: PlayerTemplate) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__PlayDamageAnim"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: PlayerTemplate): PlayDamageAnim {
		return (gameObject as any)["__PlayDamageAnim"];
	}

	private gameObject: PlayerTemplate;

	/* START-USER-CODE */

	// Write your code here.
	start() {
		eventCenter.on('playerHit', (projectile: any) => {
			if (this.gameObject.shield <= 0) {
				this.gameObject.play(this.gameObject.shipDamageAnim);
				this.gameObject.health -= projectile.damage;
			} else this.gameObject.shield -= projectile.damage;
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
