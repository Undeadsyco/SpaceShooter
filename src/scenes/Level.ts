
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Background from "../prefabs/backgrounds/Background";
import Player from "../prefabs/entities/Player";
import Enemy from "../prefabs/entities/Enemy";
/* START-USER-IMPORTS */
import ShipTemplate from "../prefabs/shipTemplates/ShipTemplate";
import ProjectileTemplate from "../prefabs/projectileTemplates/ProjectileTemplate";
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

		// enemy
		const enemy = new Enemy(this, 854, 153);
		this.add.existing(enemy);

		// lists
		const projectiles: Array<any> = [];
		const enemies: Array<any> = [];

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
	private interval = 1000/0.5;
	private timer = 0;
	private maxTime = 5000;
	private lvlTimer = 0;
	private lvlState: 'playing' | 'victory' | 'defeat' = 'playing';

	// Write your code here

	private ships: ShipTemplate[] = [];

	init(data: object) {
		// console.log('data', data);
	}

	create() {

		this.editorCreate();
		// this.scene.launch('UI');

		this.events.on('shipDestroyed', (destryedShip: ShipTemplate) => {
			this.ships = this.ships.filter(ship => ship !== destryedShip);
			destryedShip.destroy();
		});
		this.events.on('createProjectile', (projectile: ProjectileTemplate) => {
			if (!projectile) return;
			if (!this.projectiles.includes(projectile)) this.projectiles.push(projectile);
			this.add.existing(projectile);
		});
		this.events.on('removeProjectile', (destroyedProjectile: ProjectileTemplate) => {
			if (!destroyedProjectile) return;
			this.projectiles = this.projectiles.filter(projectile => projectile !== destroyedProjectile);
			destroyedProjectile.destroy();
		});

		this.physics.world.on('worldbounds', ({ gameObject }: Phaser.Physics.Arcade.Body) => {
			if (gameObject instanceof ProjectileTemplate) gameObject.play(gameObject.expAnim);
		});
	}

	update(time: number, delta: number): void {
			if(this.timer>this.interval) {
				const newEnemy = new Enemy(this);
				newEnemy.setPosition(this.physics.world.bounds.width + newEnemy.width, Phaser.Math.Between(newEnemy.height, this.physics.world.bounds.height - newEnemy.height));
				this.add.existing(newEnemy);
				this.timer = 0;
			} else this.timer += delta;
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
