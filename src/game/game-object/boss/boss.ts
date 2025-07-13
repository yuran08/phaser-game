import { Physics } from 'phaser';
import { BOSS_ANIM_KEYS } from '../../../common/assets';
import { BossConfig } from '../../../common/type';

export class Boss extends Physics.Arcade.Sprite {
  constructor(config: BossConfig) {
    const { scene, position, assetKey, frame } = config;
    const { x, y } = position;
    super(scene, x, y, assetKey, frame || 0);

    // 添加到场景中
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // 设置原点为底部中心
    this.setOrigin(0.5, 1);

    // 设置动画
    this.play({ key: BOSS_ANIM_KEYS.DEATH, repeat: -1 });
  }
}
