
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Enemy from "../prefabs/entities/Enemy";
/* START-USER-IMPORTS */
import EnemyTemplates, { EnemyTemplate } from "../prefabs/shipTemplates/enemyShips";
/* END-USER-IMPORTS */

export default class InitEnemy extends UserComponent {

	constructor(gameObject: Enemy) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__InitEnemy"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Enemy): InitEnemy {
		return (gameObject as any)["__InitEnemy"];
	}

	private gameObject: Enemy;

	/* START-USER-CODE */

	// Write your code here.

	private exhaust!: Phaser.GameObjects.Sprite;
	private template!: EnemyTemplate;
	private interval: number = 1;
	private timer: number = 0;

	protected awake() {
	}

	protected start(): void {
		this.exhaust = this.gameObject.getExhaust();
		const currentTemplate = this.gameObject.getTemplate();

		const type = Phaser.Math.Between(0, 5);
		// const type = 0;
		const TemplateType = EnemyTemplates[type];

		this.template = new TemplateType(this.gameObject.scene, currentTemplate.x, currentTemplate.y);
		this.gameObject.setTemplate(this.template);

		this.initExhaust();
		
		this.template.setVelocityX(this.template.speed);
	}

	protected update(time: number, delta: number): void {
		const { x, y, exhaustPos } = this.template;
		this.gameObject.setPosition(this.gameObject.x + this.template.x, this.gameObject.y + this.template.y);
		this.template.setPosition(0, 0);

		this.exhaust.x = x + exhaustPos.x, this.exhaust.y = y + exhaustPos.y;
		
		if (this.timer > 1000/this.interval  && this.gameObject.x > this.scene.physics.world.bounds.width * 0.33) {
			this.fireProjectile();
			this.timer = 0;
			this.interval = Phaser.Math.FloatBetween(0.5, 3);
		} else this.timer += delta;

		if (this.gameObject.x + this.gameObject.width < -(this.gameObject.width)) this.gameObject.destroy();
	}

	updateVariables() {
		this.template = this.gameObject.getTemplate();
		this.exhaust = this.gameObject.getExhaust();
	}

	initExhaust() {
		this.exhaust.setTexture(this.template.shipExhaustTexture.key, this.template.shipExhaustTexture.frame);
		this.exhaust.play(this.template.shipFlightAnim);
	}

	fireProjectile() {
		const { x: thisPosX, y: thisPosY } = this.gameObject;
		const { x: tempPosX, y: tempPosY, weaponFirePos: { x: weaponPosX, y: weaponPosY } } = this.template;
		const projectileX = thisPosX + tempPosX + weaponPosX, projectileY = thisPosY + tempPosY + weaponPosY;
		const projectile = this.template.createProjectile(projectileX, projectileY);
		projectile.setVelocityX(this.gameObject.template.body.velocity.x);
		this.scene.events.emit('createProjectile', projectile);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
