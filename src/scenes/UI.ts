
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OpenWindow from "../components/OpenWindow";
import CloseWindow from "../components/CloseWindow";
import Player from "./prefabs/ships/Player";
/* START-USER-IMPORTS */
import eventCenter from "../utils/eventEmitter";
/* END-USER-IMPORTS */

export default class UI extends Phaser.Scene {

	constructor() {
		super("UI");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// pauseBtn
		const pauseBtn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

		// display
		const display = this.add.container(0, 0);

		// element_0112_border_png
		const element_0112_border_png = this.add.image(0, 0, "gui_elements", "element_0112_border.png");
		element_0112_border_png.scaleX = 3.86;
		element_0112_border_png.scaleY = 3.1;
		element_0112_border_png.setOrigin(0, 0);
		display.add(element_0112_border_png);

		// ingame_0016_ava_frame2_png
		const ingame_0016_ava_frame2_png = this.add.image(132, 56, "gui", "ingame_0016_ava_frame2.png");
		display.add(ingame_0016_ava_frame2_png);

		// icon_avatar1_png
		const icon_avatar1_png = this.add.image(72, 60, "icons", "icon_avatar1.png");
		icon_avatar1_png.scaleX = 0.5;
		icon_avatar1_png.scaleY = 0.5;
		display.add(icon_avatar1_png);

		// element_0093_corner_copy_png
		const element_0093_corner_copy_png = this.add.image(133, 30, "gui_elements", "element_0093_corner-copy.png");
		element_0093_corner_copy_png.flipX = true;
		display.add(element_0093_corner_copy_png);

		// element_0092_detail_copy_png
		const element_0092_detail_copy_png = this.add.image(134, 28, "gui_elements", "element_0092_detail-copy.png");
		element_0092_detail_copy_png.scaleX = 92;
		element_0092_detail_copy_png.setOrigin(0, 0);
		display.add(element_0092_detail_copy_png);

		// element_0102_corner_png
		const element_0102_corner_png = this.add.image(133, 55, "gui_elements", "element_0102_corner.png");
		element_0102_corner_png.flipX = true;
		display.add(element_0102_corner_png);

		// element_0103_Layer_81_png
		const element_0103_Layer_81_png = this.add.image(134, 53, "gui_elements", "element_0103_Layer-81.png");
		element_0103_Layer_81_png.scaleX = 92;
		element_0103_Layer_81_png.setOrigin(0, 0);
		display.add(element_0103_Layer_81_png);

		// element_0107_corner_png
		const element_0107_corner_png = this.add.image(133, 42, "gui_elements", "element_0107_corner.png");
		element_0107_corner_png.flipX = true;
		display.add(element_0107_corner_png);

		// element_0106_Layer_80_png
		const element_0106_Layer_80_png = this.add.image(134, 40, "gui_elements", "element_0106_Layer-80.png");
		element_0106_Layer_80_png.scaleX = 92;
		element_0106_Layer_80_png.setOrigin(0, 0);
		display.add(element_0106_Layer_80_png);

		// ingame_0035_gamepad_png
		const ingame_0035_gamepad_png = this.add.image(867, 337, "gui", "ingame_0035_gamepad.png");
		display.add(ingame_0035_gamepad_png);

		// ingame_0030_fire_png
		const ingame_0030_fire_png = this.add.image(867, 337, "gui", "ingame_0030_fire.png");
		display.add(ingame_0030_fire_png);

		// ingame_0031_arrow_copy_2_png
		const ingame_0031_arrow_copy_2_png = this.add.image(827, 337, "gui", "ingame_0031_arrow-copy-2.png");
		display.add(ingame_0031_arrow_copy_2_png);

		// ingame_0033_arrow_copy_png
		const ingame_0033_arrow_copy_png = this.add.image(867, 377, "gui", "ingame_0033_arrow-copy.png");
		display.add(ingame_0033_arrow_copy_png);

		// ingame_0034_arrow_png
		const ingame_0034_arrow_png = this.add.image(867, 297, "gui", "ingame_0034_arrow.png");
		display.add(ingame_0034_arrow_png);

		// ingame_0032_arrow_copy_3_png
		const ingame_0032_arrow_copy_3_png = this.add.image(907, 337, "gui", "ingame_0032_arrow-copy-3.png");
		display.add(ingame_0032_arrow_copy_3_png);

		// element_0026_field_corner2_png
		const element_0026_field_corner2_png = this.add.image(919, 71, "gui_elements", "element_0026_field_corner2.png");
		display.add(element_0026_field_corner2_png);

		// element_0027_field_corner1_png
		const element_0027_field_corner1_png = this.add.image(895, 71, "gui_elements", "element_0027_field_corner1.png");
		display.add(element_0027_field_corner1_png);

		// element_0028_field_texture_png
		const element_0028_field_texture_png = this.add.image(904, 71, "gui_elements", "element_0028_field_texture.png");
		display.add(element_0028_field_texture_png);

		// element_0028_field_texture_png_1
		const element_0028_field_texture_png_1 = this.add.image(910, 71, "gui_elements", "element_0028_field_texture.png");
		display.add(element_0028_field_texture_png_1);

		// element_0028_field_texture_png_2
		const element_0028_field_texture_png_2 = this.add.image(907, 71, "gui_elements", "element_0028_field_texture.png");
		display.add(element_0028_field_texture_png_2);

		// element_0078_small_button2_png
		const element_0078_small_button2_png = this.add.image(907, 71, "gui_elements", "element_0078_small_button2.png");
		display.add(element_0078_small_button2_png);

		// pauseContainer
		const pauseContainer = this.add.container(0, 0);
		pauseContainer.visible = false;

		// pauseWindow
		const pauseWindow = this.add.image(480, 210, "gui", "pause_0003_window2.png");
		pauseContainer.add(pauseWindow);

		// playBtn
		const playBtn = this.add.image(478, 220, "gui", "pause_0002_play_button.png");
		pauseContainer.add(playBtn);

		// settingBtn
		const settingBtn = this.add.image(589, 272, "gui", "pause_0001_settings_icon.png");
		pauseContainer.add(settingBtn);

		// helpBtn
		const helpBtn = this.add.image(375, 272, "gui", "pause_0000_question_icon.png");
		pauseContainer.add(helpBtn);

		// text_0069_title_png
		const text_0069_title_png = this.add.image(480, 140, "gui", "text_0069_title.png");
		pauseContainer.add(text_0069_title_png);

		// defeatContainer
		const defeatContainer = this.add.container(0, 0);
		defeatContainer.visible = false;

		// defeteWindow
		const defeteWindow = this.add.image(480, 209, "gui", "defeat_0011_window2.png");
		defeatContainer.add(defeteWindow);

		// defeatStar1
		const defeatStar1 = this.add.image(410, 247, "gui", "defeat_0005_star1.png");
		defeatContainer.add(defeatStar1);

		// defeatStar2
		const defeatStar2 = this.add.image(550, 247, "gui", "defeat_0005_star1.png");
		defeatContainer.add(defeatStar2);

		// defeatStar3
		const defeatStar3 = this.add.image(480, 247, "gui", "defeat_0005_star1.png");
		defeatContainer.add(defeatStar3);

		// defeatLootbox
		const defeatLootbox = this.add.image(480, 350, "gui", "defeat_0014_lootbox.png");
		defeatContainer.add(defeatLootbox);

		// defeatCloseBtn
		const defeatCloseBtn = this.add.image(607, 50, "gui_elements", "element_0015_X_button.png");
		defeatContainer.add(defeatCloseBtn);

		// defeatPlanet
		const defeatPlanet = this.add.image(480, 135, "gui", "defeat_0004_planet.png");
		defeatContainer.add(defeatPlanet);

		// garageContainer
		const garageContainer = this.add.container(0, 0);
		garageContainer.visible = false;

		// garageWindow
		const garageWindow = this.add.image(480, 210, "gui", "defeat_0039_window_bg.png");
		garageContainer.add(garageWindow);

		// shipOutline
		const shipOutline = this.add.image(434, 217, "gui", "defeat_0037_ship_contour.png");
		garageContainer.add(shipOutline);

		// garageCloseBtn
		const garageCloseBtn = this.add.image(813, 56, "gui_elements", "element_0015_X_button.png");
		garageContainer.add(garageCloseBtn);

		// playerShip
		const playerShip = new Player(this, 718, 260);
		garageContainer.add(playerShip);

		// shipPartContainer1
		const shipPartContainer1 = this.add.image(327, 309, "gui", "defeat_0018_cell_detail-copy-4.png");
		garageContainer.add(shipPartContainer1);

		// shipPartContainer2
		const shipPartContainer2 = this.add.image(418, 308, "gui", "defeat_0017_cell_detail-copy-5.png");
		garageContainer.add(shipPartContainer2);

		// shipPartContainer3
		const shipPartContainer3 = this.add.image(519, 309, "gui", "defeat_0016_cell_detail-copy-2.png");
		garageContainer.add(shipPartContainer3);

		// shipPartContainer4
		const shipPartContainer4 = this.add.image(328, 218, "gui", "defeat_0017_cell_detail-copy-5.png");
		garageContainer.add(shipPartContainer4);

		// shipPartContainer5
		const shipPartContainer5 = this.add.image(428, 219, "gui", "defeat_0016_cell_detail-copy-2.png");
		garageContainer.add(shipPartContainer5);

		// shipPartContainer6
		const shipPartContainer6 = this.add.image(528, 218, "gui", "defeat_0017_cell_detail-copy-5.png");
		garageContainer.add(shipPartContainer6);

		// shipPartContainer7
		const shipPartContainer7 = this.add.image(337, 128, "gui", "defeat_0016_cell_detail-copy-2.png");
		garageContainer.add(shipPartContainer7);

		// shipPartContainer8
		const shipPartContainer8 = this.add.image(437, 128, "gui", "defeat_0017_cell_detail-copy-5.png");
		garageContainer.add(shipPartContainer8);

		// shipPart1
		const shipPart1 = this.add.image(330, 313, "gui", "defeat_0001_part_0001_small_wing.png");
		garageContainer.add(shipPart1);

		// shipPart7
		const shipPart7 = this.add.image(417, 312, "gui", "defeat_0000_part_0006_wing2.png");
		garageContainer.add(shipPart7);

		// shipPart2
		const shipPart2 = this.add.image(518, 311, "gui", "defeat_0007_part_0004_gun.png");
		garageContainer.add(shipPart2);

		// shipPart3
		const shipPart3 = this.add.image(326, 218, "gui", "defeat_0011_part_0008_turbines.png");
		garageContainer.add(shipPart3);

		// shipPart4
		const shipPart4 = this.add.image(428, 220, "gui", "defeat_0010_part_0003_body.png");
		garageContainer.add(shipPart4);

		// shipPart5
		const shipPart5 = this.add.image(327, 132, "gui", "defeat_0005_part_0000_wing.png");
		garageContainer.add(shipPart5);

		// shipPart6
		const shipPart6 = this.add.image(428, 133, "gui", "defeat_0006_part_0005_small_wing2.png");
		garageContainer.add(shipPart6);

		// garageStore1
		const garageStore1 = this.add.image(190, 343, "gui", "defeat_0025_list_cell_one.png");
		garageContainer.add(garageStore1);

		// garageStore2
		const garageStore2 = this.add.image(190, 281, "gui", "defeat_0025_list_cell_one.png");
		garageContainer.add(garageStore2);

		// garageStore3
		const garageStore3 = this.add.image(190, 219, "gui", "defeat_0025_list_cell_one.png");
		garageContainer.add(garageStore3);

		// garageStore4
		const garageStore4 = this.add.image(190, 157, "gui", "defeat_0025_list_cell_one.png");
		garageContainer.add(garageStore4);

		// garageStore5
		const garageStore5 = this.add.image(190, 95, "gui", "defeat_0025_list_cell_one.png");
		garageContainer.add(garageStore5);

		// garageStoreIcon1
		const garageStoreIcon1 = this.add.image(223, 118, "gui", "defeat_0024_Layer-80.png");
		garageContainer.add(garageStoreIcon1);

		// garageStoreIcon2
		const garageStoreIcon2 = this.add.image(223, 179, "gui", "defeat_0024_Layer-80.png");
		garageContainer.add(garageStoreIcon2);

		// garageStoreIcon3
		const garageStoreIcon3 = this.add.image(223, 242, "gui", "defeat_0024_Layer-80.png");
		garageContainer.add(garageStoreIcon3);

		// garageStoreIcon4
		const garageStoreIcon4 = this.add.image(223, 305, "gui", "defeat_0024_Layer-80.png");
		garageContainer.add(garageStoreIcon4);

		// garageStoreIcon5
		const garageStoreIcon5 = this.add.image(223, 365, "gui", "defeat_0024_Layer-80.png");
		garageContainer.add(garageStoreIcon5);

		// garageStorePrice1
		const garageStorePrice1 = this.add.image(232, 118, "gui", "text_0063_1.png");
		garageStorePrice1.scaleX = 0.5;
		garageStorePrice1.scaleY = 0.5;
		garageContainer.add(garageStorePrice1);

		// garageStorePrice2
		const garageStorePrice2 = this.add.image(231, 180, "gui", "text_0063_1.png");
		garageStorePrice2.scaleX = 0.5;
		garageStorePrice2.scaleY = 0.5;
		garageContainer.add(garageStorePrice2);

		// garageStorePrice3
		const garageStorePrice3 = this.add.image(231, 242, "gui", "text_0063_1.png");
		garageStorePrice3.scaleX = 0.5;
		garageStorePrice3.scaleY = 0.5;
		garageContainer.add(garageStorePrice3);

		// garageStorePrice4
		const garageStorePrice4 = this.add.image(231, 304, "gui", "text_0063_1.png");
		garageStorePrice4.scaleX = 0.5;
		garageStorePrice4.scaleY = 0.5;
		garageContainer.add(garageStorePrice4);

		// garageStorePrice5
		const garageStorePrice5 = this.add.image(232, 365, "gui", "text_0063_1.png");
		garageStorePrice5.scaleX = 0.5;
		garageStorePrice5.scaleY = 0.5;
		garageContainer.add(garageStorePrice5);

		// garageEnergyBar
		const garageEnergyBar = this.add.image(724, 186, "gui", "defeat_0029_stats.png");
		garageContainer.add(garageEnergyBar);

		// garageDamageBar
		const garageDamageBar = this.add.image(724, 156, "gui", "defeat_0029_stats.png");
		garageContainer.add(garageDamageBar);

		// garageDefenceBar
		const garageDefenceBar = this.add.image(724, 127, "gui", "defeat_0029_stats.png");
		garageContainer.add(garageDefenceBar);

		// garageHealthBar
		const garageHealthBar = this.add.image(724, 98, "gui", "defeat_0029_stats.png");
		garageContainer.add(garageHealthBar);

		// menuContainer
		const menuContainer = this.add.container(0, 0);
		menuContainer.visible = false;

		// element_0085_border_back_png
		const element_0085_border_back_png = this.add.image(909, 135, "gui_elements", "element_0085_border&back.png");
		menuContainer.add(element_0085_border_back_png);

		// element_0062_question_icon_png
		const element_0062_question_icon_png = this.add.image(906, 202, "gui_elements", "element_0062_question_icon.png");
		menuContainer.add(element_0062_question_icon_png);

		// element_0063_settings_icon_png
		const element_0063_settings_icon_png = this.add.image(905, 174, "gui_elements", "element_0063_settings_icon.png");
		menuContainer.add(element_0063_settings_icon_png);

		// element_0084_home_png
		const element_0084_home_png = this.add.image(905, 147, "gui_elements", "element_0084_home.png");
		menuContainer.add(element_0084_home_png);

		// element_0083_sound_png
		const element_0083_sound_png = this.add.image(904, 122, "gui_elements", "element_0083_sound.png");
		menuContainer.add(element_0083_sound_png);

		// element_0081_pause_png
		const element_0081_pause_png = this.add.image(905, 96, "gui_elements", "element_0081_pause.png");
		menuContainer.add(element_0081_pause_png);

		// element_0048_round_small_button_png
		const element_0048_round_small_button_png = this.add.image(905, 71, "gui_elements", "element_0048_round_small_button.png");
		menuContainer.add(element_0048_round_small_button_png);

		// element_0078_small_button2_png (components)
		const element_0078_small_button2_pngOpenWindow = new OpenWindow(element_0078_small_button2_png);
		element_0078_small_button2_pngOpenWindow.window = menuContainer;

		// defeatCloseBtn (components)
		const defeatCloseBtnCloseWindow = new CloseWindow(defeatCloseBtn);
		defeatCloseBtnCloseWindow.window = defeatContainer;
		const defeatCloseBtnOpenWindow = new OpenWindow(defeatCloseBtn);
		defeatCloseBtnOpenWindow.window = garageContainer;

		// garageCloseBtn (components)
		const garageCloseBtnCloseWindow = new CloseWindow(garageCloseBtn);
		garageCloseBtnCloseWindow.window = garageContainer;

		// element_0048_round_small_button_png (components)
		const element_0048_round_small_button_pngCloseWindow = new CloseWindow(element_0048_round_small_button_png);
		element_0048_round_small_button_pngCloseWindow.window = menuContainer;

		this.pauseContainer = pauseContainer;
		this.playBtn = playBtn;
		this.defeatContainer = defeatContainer;
		this.defeatCloseBtn = defeatCloseBtn;
		this.garageContainer = garageContainer;
		this.garageCloseBtn = garageCloseBtn;
		this.pauseBtn = pauseBtn;

		this.events.emit("scene-awake");
	}

	private pauseContainer!: Phaser.GameObjects.Container;
	private playBtn!: Phaser.GameObjects.Image;
	private defeatContainer!: Phaser.GameObjects.Container;
	private defeatCloseBtn!: Phaser.GameObjects.Image;
	private garageContainer!: Phaser.GameObjects.Container;
	private garageCloseBtn!: Phaser.GameObjects.Image;
	private pauseBtn!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.pauseBtn.on('down', () => {
			if (!this.scene.isPaused("Level")) {
				this.scene.pause('Level');
				this.pauseContainer.setVisible(true);
			} else {
				this.scene.resume('Level');
				this.pauseContainer.setVisible(false);
			}
		});

		this.playBtn.setInteractive().on('pointerdown', () => {
			this.scene.resume('Level');
			this.pauseContainer.setVisible(false);
		});

		eventCenter.on('gameOver', () => {
			this.defeatContainer.setVisible(true);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
