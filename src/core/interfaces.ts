import Tile from './modules/Tile'
import Sprite from './modules/Sprite'
import Display from './modules/Display'
import Globals from './modules/Globals'
import Tilemap from './modules/Tilemap'
import Input from './modules/input/Input'
import ParentLoader from './modules/loader/Loader'

export interface DynamicObject {
  [key: string]: any;
}

export interface Controller {
  listener (): void;
}

export interface Configs {
  title: string;
  width: number;
  height: number;
  fps: number;
  mainController: string;
}

export interface Loader {
  load(path: string, ...args: any): any;
}

export interface Modules {
  config: Configs
  input: Input
  display: Display
  globals: Globals
  loader: ParentLoader
  assets: Assets
}

export interface AnimationFrame {
  frame: Sprite | Tile | HTMLImageElement;
  speed: number;
}

export interface TileOptions {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  opacity?: number
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
