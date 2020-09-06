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
