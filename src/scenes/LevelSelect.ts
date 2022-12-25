
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Background from "./prefabs/backgrounds/Background";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelSelect extends Phaser.Scene {

	constructor() {
		super("LevelSelect");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = new Background(this, 0, 0);
		this.add.existing(background);

		// display
		const display = this.add.container(0, 0);

		// window
		const window = this.add.image(480, 210, "gui", "level_selection_0009_window_fill.png");
		display.add(window);

		// targetLevel
		const targetLevel = this.add.image(274, 182, "gui", "level_selection_0005_level_icon_attack.png");
		display.add(targetLevel);

		// level1
		const level1 = this.add.image(274, 185, "gui", "level_selection_0000_level_icon4.png");
		display.add(level1);

		// level2
		const level2 = this.add.image(352, 142, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level2);

		// level3
		const level3 = this.add.image(423, 171, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level3);

		// level4
		const level4 = this.add.image(382, 246, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level4);

		// level5
		const level5 = this.add.image(333, 307, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level5);

		// level6
		const level6 = this.add.image(478, 342, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level6);

		// level7
		const level7 = this.add.image(554, 305, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level7);

		// level8
		const level8 = this.add.image(633, 314, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level8);

		// level9
		const level9 = this.add.image(668, 227, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level9);

		// level10
		const level10 = this.add.image(630, 130, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level10);

		// level11
		const level11 = this.add.image(582, 210, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level11);

		// level12
		const level12 = this.add.image(519, 139, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level12);

		// level13
		const level13 = this.add.image(469, 233, "gui", "level_selection_0004_level_icon_blocked.png");
		display.add(level13);

		// lists
		const levels = [level1, level13, level12, level11, level10, level9, level8, level7, level6, level5, level4, level3, level2];

		this.levels = levels;

		this.events.emit("scene-awake");
	}

	private levels!: Phaser.GameObjects.Image[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
