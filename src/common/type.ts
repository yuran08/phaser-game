import { Scene } from "phaser";

export interface BossConfig {
  scene: Scene;
  position: Position;
  assetKey: string;
  frame?: number;
}

export interface Position {
  x: number;
  y: number;
}