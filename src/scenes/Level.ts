
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Background from "../prefabs/backgrounds/Background";
import Player from "../prefabs/entities/Player";
/* START-USER-IMPORTS */
import ShipTemplate from "../prefabs/shipTemplates/ShipTemplate";
import eventCenter from "../utils/eventEmitter";
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = new Background(this, 0, 0);
		this.add.existing(background);
		background.staticBg.setTexture("space_6_bright", "back_bright_0008_sky.png");

		// player
		const player = new Player(this, 141, 245);
		this.add.existing(player);

		// lists
		const projectiles: Array<any> = [];
		const enemies: Array<any> = [];

		// projectilesHitPlayer
		this.physics.add.collider(player, projectiles);

		// playerHitsEnemies
		this.physics.add.collider(player, enemies);

		// projectilesHitEnemies
		this.physics.add.collider(enemies, projectiles);

		this.projectiles = projectiles;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	private projectiles!: Array<any>;
	private enemies!: Array<any>;

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

	private ships: ShipTemplate[] = [];

	init(data: object) {
		// console.log('data', data);
	}

	create() {

		this.editorCreate();
		this.scene.launch('UI');

		eventCenter.on('shipDestroyed', (destryedShip: ShipTemplate) => {
			this.ships = this.ships.filter(ship => ship !== destryedShip);
			destryedShip.destroy();
		});

		this.events.on(Phaser.Scenes.Events.DESTROY, () => {
			eventCenter.off('shipDestroyed');
		});
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
