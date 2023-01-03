
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import eventCenter from "../../../utils/eventEmitter";
import StatBar from "./StatBar";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerStatsContainer extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// ingame_0016_ava_frame2_png
		const ingame_0016_ava_frame2_png = scene.add.image(0, 0, "gui", "ingame_0016_ava_frame2.png");
		this.add(ingame_0016_ava_frame2_png);

		// energyBar
		const energyBar = new StatBar(scene, 47, -1);
		energyBar.name = "energyBar";
		this.add(energyBar);

		// shieldBar
		const shieldBar = new StatBar(scene, 47, -14);
		shieldBar.name = "shieldBar";
		this.add(shieldBar);
		shieldBar.bar.setTexture("gui_elements", "element_0105_line.png");

		// heathBar
		const heathBar = new StatBar(scene, 47, -26);
		heathBar.name = "heathBar";
		this.add(heathBar);
		heathBar.bar.setTexture("gui_elements", "element_0109_line.png");

		// icon_avatar02_png
		const icon_avatar02_png = scene.add.image(-59, 3, "icons", "icon_avatar02.png");
		icon_avatar02_png.scaleX = 0.5;
		icon_avatar02_png.scaleY = 0.5;
		this.add(icon_avatar02_png);

		// lists
		const statBars = [energyBar, heathBar, shieldBar];

		// shieldBar (prefab fields)
		shieldBar.filler = {"key":"gui_elements","frame":"element_0107_corner.png"};

		// heathBar (prefab fields)
		heathBar.filler = {"key":"gui_elements","frame":"element_0093_corner-copy.png"};

		this.statBars = statBars;

		/* START-USER-CTR-CODE */
		// Write your code here.

		statBars.forEach(statBar => {
			statBar.create();
			eventCenter.on(`${statBar.name}Decrement`, statBar.removeTick);
		});
		/* END-USER-CTR-CODE */
	}

	private statBars: StatBar[];

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
