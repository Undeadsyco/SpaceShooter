
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Background from "../prefabs/backgrounds/Background";
import Player from "../prefabs/entities/Player";
import Enemy from "../prefabs/entities/Enemy";
/* START-USER-IMPORTS */
import ShipTemplate from "../prefabs/shipTemplates/ShipTemplate";
import ProjectileTemplate from "../prefabs/projectileTemplates/ProjectileTemplate";
// import Enemy from "../prefabs/entities/Enemy";
import { GameManager } from "../classes";
import { PlayerTemplate } from "../prefabs/shipTemplates/playerShips";
import EventCenter from "../utils/EventCenter";
import EnemyProjectileTemplate from "../prefabs/projectileTemplates/enemyProjectiles/EnemyProjectileTemplate";
import PlayerProjectileTemplate from "../prefabs/projectileTemplates/playerProjectiles/PlayerProjectileTemplate";
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
		const enemy = new Enemy(this, 790, 243);
		this.add.existing(enemy);

		this.player = player;
		this.enemy = enemy;

		this.events.emit("scene-awake");
	}

	private player!: Player;
	private enemy!: Enemy;

	/* START-USER-CODE */
	private emitter: EventCenter = EventCenter.getInstance();
	private enemies!: Phaser.GameObjects.Group;
	private projectiles!: Phaser.GameObjects.Group;
	private maxEnemyNum: number = 10;
	private enemySpawnInterval: number = 1000 / 0.75;
	private enemySpawnTimer: number = 0;

	// Write your code here


	init(data: object) {

	}

	create() {

		this.editorCreate();

		this.setGroups();
		this.setColliders();
		this.setupEvents();
	}

	update(time: number, delta: number): void {
		this.enemySpawnTimer += delta
		this.spawnEnemy();
	}

	setGroups() {
		this.enemies = this.add.group([this.enemy], {
			classType: Enemy,
		});

		this.projectiles = this.add.group([], {
			classType: ProjectileTemplate,
		});
	}

	setColliders() {
		this.physics.add.collider(this.player, this.projectiles, this.projectileHitsPlayer, this.checkProjectile, this);
		this.physics.add.collider(this.enemies, this.projectiles, this.projectileHitsEnemy, this.checkProjectile, this);
	}

	setupEvents() {
		this.emitter.on('createProjectile', (projectile: ProjectileTemplate) => {
			this.projectiles.add(projectile, true);
		});
		this.emitter.on('removeProjectile', (projectile: ProjectileTemplate) => {
			this.projectiles.remove(projectile, true, true);
		});
		this.emitter.on('expProjectile', (projectile: ProjectileTemplate) => {
			projectile.playAnim('exp');
		});
		this.emitter.on('createEnemy', (enemy: Enemy) => {
			this.enemies.add(enemy, true);
		});
		this.emitter.on('damageEnemy', (enemy: Enemy, projectile: ProjectileTemplate) => {
			enemy.loseHealth();
		});
		this.emitter.on('removeEnemy', (enemy: Enemy) => {
			this.enemies.remove(enemy, true, true);
		});
		this.emitter.on('damagePlayer', (player: Player, Projectile: ProjectileTemplate) => {
			player.loseHealth();
		});

		this.emitter.on('gameOver', () => {
			this.scene.start('Title');
		});
	}

	checkProjectile(ship: Phaser.Types.Physics.Arcade.GameObjectWithBody, projectile: Phaser.Types.Physics.Arcade.GameObjectWithBody): boolean {
		const playerHitEnemy = ship instanceof Player && projectile instanceof EnemyProjectileTemplate;
		const enemyHitPlayer = ship instanceof Enemy && projectile instanceof PlayerProjectileTemplate;
		if (playerHitEnemy || enemyHitPlayer) {
			(projectile as ProjectileTemplate).body.destroy();
			this.emitter.emit('expProjectile', projectile);
			return true;
		};
		return false;
	}
	projectileHitsPlayer(player: Phaser.Types.Physics.Arcade.GameObjectWithBody, projectile: Phaser.Types.Physics.Arcade.GameObjectWithBody) {
		this.emitter.emit('damagePlayer', player, projectile);
	}
	projectileHitsEnemy(enemy: Phaser.Types.Physics.Arcade.GameObjectWithBody, projectile: Phaser.Types.Physics.Arcade.GameObjectWithBody) {
		this.emitter.emit('damageEnemy', enemy, projectile);
	}

	spawnEnemy() {
		const world = this?.physics.world.bounds;
		if (this.enemies.children.size < this.maxEnemyNum && this.enemySpawnTimer > this.enemySpawnInterval) {
			const enemy = new Enemy(this);
			enemy.setPosition(world.width - enemy.template.width, Phaser.Math.Between(0 + enemy.template.height, world.height - enemy.template.health));
			this.emitter.emit('createEnemy', enemy);
			this.enemySpawnTimer = 0;
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
