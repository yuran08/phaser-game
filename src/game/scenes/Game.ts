import { Scene } from 'phaser';
import { Boss } from '../game-object/boss/boss';
import { ASSET_KEYS } from '../../common/assets';

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  boss: Boss;

  constructor() {
    super('Game');
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0xffffff);

    // 创建boss并放置在场景中心
    this.boss = new Boss({
      scene: this,
      position: { x: 512, y: 400 },
      assetKey: ASSET_KEYS.BOSS,
      frame: 0,
    });
  }
}
