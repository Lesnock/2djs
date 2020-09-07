import Tile from './modules/Tile'
import Sprite from './modules/Sprite'

export interface DynamicObject {
  [key: string]: any;
}

export interface Configs {
  title: string;
  width: number;
  height: number;
  fps: number;
  mainController: string;
}

export interface AnimationFrame {
  frame: Sprite | Tile | HTMLImageElement;
  speed: number;
}
