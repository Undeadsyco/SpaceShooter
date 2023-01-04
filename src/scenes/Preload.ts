
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PreloadText from "../components/PreloadText";
/* START-USER-IMPORTS */
import assetPackUrl from "../../static/assets/asset-pack.json";
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// element_0012_slider1_corner_png
		const element_0012_slider1_corner_png = this.add.image(149, 250, "gui_elements", "element_0012_slider1_corner.png");
		element_0012_slider1_corner_png.scaleX = 3;
		element_0012_slider1_corner_png.scaleY = 3;
		element_0012_slider1_corner_png.flipX = true;

		// element_0011_slider1_detail_png
		const element_0011_slider1_detail_png = this.add.image(483, 250, "gui_elements", "element_0011_slider1_detail.png");
		element_0011_slider1_detail_png.scaleX = 656;
		element_0011_slider1_detail_png.scaleY = 3;
		element_0011_slider1_detail_png.flipY = true;

		// element_0009_slider1_corner_png
		const element_0009_slider1_corner_png = this.add.image(814, 250, "gui_elements", "element_0009_slider1_corner.png");
		element_0009_slider1_corner_png.scaleY = 3;
		element_0009_slider1_corner_png.flipY = true;

		// element_0010_scrollbar2_border_png
		const element_0010_scrollbar2_border_png = this.add.image(480, 250, "gui_elements", "element_0010_scrollbar2_border.png");
		element_0010_scrollbar2_border_png.scaleX = 2;
		element_0010_scrollbar2_border_png.scaleY = 3;

		// progress
		const progress = this.add.text(480, 250, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "30px" });

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.load.pack('asset-pack', assetPackUrl);

	}

	create() {

		this.scene.start("Level");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
