import Tile from './modules/Tile'
import Sprite from './modules/Sprite'

export interface DynamicObject {
  [key: string]: any;
}

export interface Controller {
  listener (): void;
}

export interface Loader {
  load(path?: any): any;
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

export interface Assets {
  images: Map<string, HTMLImageElement>;
  sheets: Map<string, any>;
  audios: Map<string, any>;
  json: Map<string, any>;
}
