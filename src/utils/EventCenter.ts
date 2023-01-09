import Phaser from "phaser";

let instance: Phaser.Events.EventEmitter | null = null;
export default class EventCenter extends Phaser.Events.EventEmitter {
  constructor() {
    super();
    if (instance === null) {
      instance = this;
    }
  }

  static getInstance() {
    if (instance === null) {
      instance = new EventCenter();
    }

    return instance;
  }
}