
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Background extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// staticLayer
		const staticLayer = scene.add.container(0, 0);
		this.add(staticLayer);

		// staticBg
		const staticBg = scene.add.image(0, 0, "space_6_bright", "back_bright_0008_sky.png");
		staticBg.scaleY = 0.78;
		staticBg.setOrigin(0, 0);
		staticLayer.add(staticBg);

		// dynamicLayers
		const dynamicLayers = scene.add.container(0, 0);
		this.add(dynamicLayers);

		// dynamicLayer1
		const dynamicLayer1 = scene.add.image(0, 0, "space_6_bright", "back_bright_0002_planet3.png");
		dynamicLayer1.setOrigin(0, 0);
		dynamicLayers.add(dynamicLayer1);

		// dynamicLayer2
		const dynamicLayer2 = scene.add.image(0, 0, "space_6_bright", "back_bright_0005_planet6.png");
		dynamicLayer2.setOrigin(0, 0);
		dynamicLayers.add(dynamicLayer2);

		// dynamicLayer3
		const dynamicLayer3 = scene.add.image(0, 0, "space_6_bright", "back_bright_0000_planet1.png");
		dynamicLayer3.setOrigin(0, 0);
		dynamicLayers.add(dynamicLayer3);

		// dynamicLayer4
		const dynamicLayer4 = scene.add.image(0, 0, "space_6_bright", "back_bright_0001_planet2.png");
		dynamicLayer4.setOrigin(0, 0);
		dynamicLayers.add(dynamicLayer4);

		// dynamicLayer5
		const dynamicLayer5 = scene.add.image(0, 0, "space_6_bright", "back_bright_0003_planet4.png");
		dynamicLayer5.setOrigin(0, 0);
		dynamicLayers.add(dynamicLayer5);

		// dynamicLayer6
		const dynamicLayer6 = scene.add.image(0, 0, "space_6_bright", "back_bright_0006_planet7.png");
		dynamicLayer6.setOrigin(0, 0);
		dynamicLayers.add(dynamicLayer6);

		// dynamicLayer7
		const dynamicLayer7 = scene.add.image(0, 0, "space_6_bright", "back_bright_0004_planet5.png");
		dynamicLayer7.setOrigin(0, 0);
		dynamicLayers.add(dynamicLayer7);

		// dynamicLayer8
		const dynamicLayer8 = scene.add.image(0, 0, "space_6_bright", "back_bright_0007_planet8.png");
		dynamicLayer8.setOrigin(0, 0);
		dynamicLayers.add(dynamicLayer8);

		this.staticLayer = staticLayer;
		this.staticBg = staticBg;
		this.dynamicLayers = dynamicLayers;
		this.dynamicLayer1 = dynamicLayer1;
		this.dynamicLayer2 = dynamicLayer2;
		this.dynamicLayer3 = dynamicLayer3;
		this.dynamicLayer4 = dynamicLayer4;
		this.dynamicLayer5 = dynamicLayer5;
		this.dynamicLayer6 = dynamicLayer6;
		this.dynamicLayer7 = dynamicLayer7;
		this.dynamicLayer8 = dynamicLayer8;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public staticLayer: Phaser.GameObjects.Container;
	public staticBg: Phaser.GameObjects.Image;
	public dynamicLayers: Phaser.GameObjects.Container;
	public dynamicLayer1: Phaser.GameObjects.Image;
	public dynamicLayer2: Phaser.GameObjects.Image;
	public dynamicLayer3: Phaser.GameObjects.Image;
	public dynamicLayer4: Phaser.GameObjects.Image;
	public dynamicLayer5: Phaser.GameObjects.Image;
	public dynamicLayer6: Phaser.GameObjects.Image;
	public dynamicLayer7: Phaser.GameObjects.Image;
	public dynamicLayer8: Phaser.GameObjects.Image;
	public shouldDup: boolean = false;
	public scrollSpeedX: number = 10;
	public scrollSpeedY: number = 10;
	public shouldScrollY: boolean = false;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
