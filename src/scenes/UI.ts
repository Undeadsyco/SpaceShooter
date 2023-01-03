
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlayerStatsContainer from "../prefabs/GUI/PlayerStatsView/PlayerStatsContainer";
/* START-USER-IMPORTS */
import eventCenter from "../utils/eventEmitter";
/* END-USER-IMPORTS */

export default class UI extends Phaser.Scene {

	constructor() {
		super("UI");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// pauseBtn
		const pauseBtn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

		// display
		const display = this.add.container(0, 0);

		// element_0112_border_png
		const element_0112_border_png = this.add.image(0, 0, "gui_elements", "element_0112_border.png");
		element_0112_border_png.scaleX = 3.86;
		element_0112_border_png.scaleY = 3.1;
		element_0112_border_png.setOrigin(0, 0);
		display.add(element_0112_border_png);

		// playerStatsContainer
		const playerStatsContainer = new PlayerStatsContainer(this, 136, 64);
		this.add.existing(playerStatsContainer);

		this.playerStatsContainer = playerStatsContainer;
		this.pauseBtn = pauseBtn;

		this.events.emit("scene-awake");
	}

	private playerStatsContainer!: PlayerStatsContainer;
	private pauseBtn!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		// this.pauseBtn.on('down', () => {
		// 	if (!this.scene.isPaused("Level")) {
		// 		this.scene.pause('Level');
		// 		this.pauseContainer.setVisible(true);
		// 	} else {
		// 		this.scene.resume('Level');
		// 		this.pauseContainer.setVisible(false);
		// 	}
		// });

		// this.playBtn.setInteractive().on('pointerdown', () => {
		// 	this.scene.resume('Level');
		// 	this.pauseContainer.setVisible(false);
		// });

		// eventCenter.on('gameOver', () => {
		// 	this.defeteContainer.setVisible(true);
		// });

		// this.defeatCloseBtn.setInteractive().on('pointerdown', () => {
		// 	this.scene.stop('Level');
		// 	this.scene.start('LevelSelect');
		// });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
