import Global from './Global'
import Graphics from './Graphics'

abstract class State {
  abstract update (dt: number): void;
  abstract render(g: Graphics): void;

  /**
   * Global data
   */
  globals = Global
}

export default State
