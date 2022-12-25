
// You can write more code here

/* START OF COMPILED CODE */

import ShipTemplate from "./ShipTemplate";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Player extends ShipTemplate {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 64, y ?? 64, texture, frame);

		this.setOrigin(0.5, 0.5);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.shipTexture = `player_${this.shipType}_lvl${this.shipLevel}`; 
		/* END-USER-CTR-CODE */
	}

	public shipOption: "1"|"2"|"3" = "1";
	public shipLevel: "1"|"2"|"3"|"4"|"5"|"6"|"7" = "1";
	public shipTexture: string = "";

	/* START-USER-CODE */

	// Write your code here.

	create() {
		this.on('updatePlayerLvl', (level: "1"|"2"|"3"|"4"|"5"|"6"|"7") => {
			this.shipLevel = level;
		});
		this.on('updatePlayerType', (type: "1"|"2"|"3") => {
			this.shipOption = type;
		})
	}

	update() {
		if (this.shipTexture !== `player_ship${this.shipType}_lvl${this.shipLevel}.png`) {
			this.shipTexture = `player_ship${this.shipType}_lvl${this.shipLevel}.png`;
			this.setTexture('player', this.shipTexture);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
