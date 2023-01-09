
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Background from "../prefabs/backgrounds/Background";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Title extends Phaser.Scene {

	constructor() {
		super("Title");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = new Background(this, 0, 0);
		this.add.existing(background);

		// window
		this.add.image(480, 210, "gui", "main_0008_window2.png");

		// startBtn
		const startBtn = this.add.image(480, 300, "gui", "pause_0002_play_button.png");

		// decor
		this.add.image(490, 150, "gui", "main_0005_ship_picture.png");

		// title
		this.add.image(543, 180, "gui", "text_0026_title.png");

		this.startBtn = startBtn;

		this.events.emit("scene-awake");
	}

	private startBtn!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.startBtn.setInteractive().on('pointerdown', () => {
			this.scene.start('Level');
		});
	}

	update(time: number, delta: number): void {

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
