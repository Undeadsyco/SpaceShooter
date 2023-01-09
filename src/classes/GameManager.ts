import Phaser from 'phaser';

export default class GameManager {
  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }
  private scene!: Phaser.Scene;

  initEvents() {

  }

  shutDownEvents() {
    
  }
}