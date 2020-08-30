import { Graphics } from './'

abstract class State {
  abstract update (dt: number): void;
  abstract render(g: Graphics): void;
}

export default State
