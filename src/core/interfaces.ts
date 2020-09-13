import Tile from './modules/Tile'
import Sprite from './modules/Sprite'
import Tilemap from './modules/Tilemap'

export interface DynamicObject {
  [key: string]: any;
}

export interface Controller {
  listener (): void;
}

export interface Loader {
  load(path?: any, ...others: any): any;
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
  tilemaps: Map<string, Tilemap>;
}

export interface MapLayer {
  rows: number;
  columns: number;
  map: number[];
}

export interface JSONTilemap {
  tilemap: {
    layers: MapLayer[]
  }
}
