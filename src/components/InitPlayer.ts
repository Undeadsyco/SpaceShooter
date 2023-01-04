
// You can write more code here

type playerKeys = {
	upBtn: Phaser.Input.Keyboard.Key;
	downBtn: Phaser.Input.Keyboard.Key;
	leftBtn: Phaser.Input.Keyboard.Key;
	rightBtn: Phaser.Input.Keyboard.Key;
}

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Player from "../prefabs/entities/Player";
/* START-USER-IMPORTS */
import PlayerTypeTemplates, { PlayerTemplate } from "../prefabs/shipTemplates/playerShips";
/* END-USER-IMPORTS */

export default class InitPlayer extends UserComponent {

	constructor(gameObject: Player) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__InitPlayer"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Player): InitPlayer {
		return (gameObject as any)["__InitPlayer"];
	}

	private gameObject: Player;

	/* START-USER-CODE */
	timer: number = 0;
	interval: number = 10;

	// Write your code here.
	private exhaust!: Phaser.GameObjects.Sprite;
	private template!: PlayerTemplate;

	awake() {
		this.exhaust =  this.gameObject.getExhaust();
		const currentTemplate = this.gameObject.getTemplate();
		const { shipLvl, shipType, shootBtn } = this.gameObject;

		const lvl = parseInt(shipType)-1;
		const type = parseInt(shipLvl)-1;
		const TemplateType = PlayerTypeTemplates[lvl][type];

		this.template = new TemplateType(this.gameObject.scene, currentTemplate.x, currentTemplate.y);
		this.gameObject.setTemplate(this.template);

		this.initExhaust(this.exhaust, this.template);
		this.initWeapon(shootBtn, this.template);
		this.initMovement(this.gameObject.getInputs(), this.template);
	}

	protected update(time: number, delta: number): void {		
		const { x,  y, exhaustPos } = this.template;

		this.exhaust.x = x + exhaustPos.x, this.exhaust.y = y + exhaustPos.y;
	}

	updateVariables() {
		this.template = this.gameObject.getTemplate();
		this.exhaust = this.gameObject.getExhaust();
	}

	initExhaust(exhaust: Phaser.GameObjects.Sprite, template: PlayerTemplate) {
		exhaust.setTexture(template.shipExhaustTexture.key, template.shipExhaustTexture.frame);
		exhaust.play(template.shipFlightAnim);
	}

	initMovement({ upBtn, downBtn, leftBtn, rightBtn }: playerKeys, template: PlayerTemplate) {
		upBtn.on('down', () => {
			template.setVelocityY(-template.speed);
		});
		downBtn.on('down', () => {
			template.setVelocityY(template.speed);
		});
		leftBtn.on('down', () => {
			template.setVelocityX(-template.speed);
		});
		rightBtn.on('down', () => {
			template.setVelocityX(template.speed);
		});
	}

	initWeapon(btn: Phaser.Input.Keyboard.Key, template: PlayerTemplate) {
		btn.on('down', () => {
			console.log('fire weapon');
			if (this.timer > 1000 / this.interval) this.fireProjectile(template), this.timer = 0;
		});
	}

	fireProjectile(template: PlayerTemplate) {
		const { x: thisPosX, y: thisPosY } = this.gameObject;
		const { x: tempPosX, y: tempPosY, weaponFirePos: { x: weaponPosX, y: weaponPosY } } = template;
		const projectileX = thisPosX + tempPosX + weaponPosX, projectileY = thisPosY + tempPosY + weaponPosY;
		const projectile = template.createProjectile(projectileX, projectileY);
		this.scene.events.emit('createProjectile', projectile);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
