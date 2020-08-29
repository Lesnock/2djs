abstract class State {
  abstract update (dt: number): void;
  abstract render (g: CanvasRenderingContext2D): void;
}

export default State
