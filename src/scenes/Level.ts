
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Background from "./prefabs/backgrounds/Background";
import ShipTemplate from "./prefabs/ships/ShipTemplate";
import Player from "./prefabs/ships/Player";
/* START-USER-IMPORTS */
import eventCenter from "..//utils/eventEmitter";
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// spaceBtn
		const spaceBtn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// background
		const background = new Background(this, 0, 0);
		this.add.existing(background);
		background.visible = true;
		background.staticBg.setTexture("space_6_bright", "back_bright_0008_sky.png");

		// shipTemplate
		const shipTemplate = new ShipTemplate(this, 207, 244);
		this.add.existing(shipTemplate);

		// player
		const player = new Player(this, 165, 89);
		this.add.existing(player);

		// lists
		const projectiles: Array<any> = [];

		this.player = player;
		this.spaceBtn = spaceBtn;
		this.projectiles = projectiles;

		this.events.emit("scene-awake");
	}

	private player!: Player;
	private spaceBtn!: Phaser.Input.Keyboard.Key;
	private projectiles!: Array<any>;

	/* START-USER-CODE */

	private width = 960;
	private height = 540;
	private maxEnemies = 20;
	private interval = 150;
	private timer = 0;
	private maxTime = 5000;
	private lvlTimer = 0;
	private lvlState: 'playing'|'victory'|'defeat' = 'playing';

	// Write your code here

	create() {
		this.scene.launch('UI');

		this.editorCreate();

		this.player.create();
	}

	update(time: number, delta: number) {
		this.player.update();

		if (this.lvlTimer >= this.maxTime && this.lvlState === 'playing') {
			console.log('gameOver')
			eventCenter.emit('gameOver');
			this.lvlState = 'defeat';
		} else this.lvlTimer += delta;

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
