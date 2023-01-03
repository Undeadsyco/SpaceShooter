
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StatBar extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// bar
		const bar = scene.add.image(0, 0, "gui_elements", "element_0101_line.png");
		this.add(bar);

		// lists
		const statTicks: Array<any> = [];

		this.bar = bar;
		this.statTicks = statTicks;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public bar: Phaser.GameObjects.Image;
	private statTicks: Array<any>;
	public filler: { key: string, frame?: string | number } = { "key": "gui_elements", "frame": "element_0102_corner.png" };

	/* START-USER-CODE */

	// Write your code here.

	create() {
		for (let x = this.bar.x - (this.bar.width / 2); x < (this.bar.x + (this.bar.width * 0.47));) {
			const img = this.scene.add.image(x, 0, this.filler.key, this.filler.frame);
			img.setPosition(x + img.width, 0);
			this.statTicks.push(img);
			this.add(img);
			x += img.width;
		}
	}

	removeTick() {
		const tick = this.statTicks.pop() as Phaser.GameObjects.Image;
		if (tick) tick.destroy();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
