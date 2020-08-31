import Global from './Global'
import Input from './input/Input'
import Graphics from './Graphics'

abstract class State {
  abstract update (dt: number): void;
  abstract render(g: Graphics): void;

  /**
   * Global class
   */
  globals = Global

  /**
   * Input class
   */
  input = Input

  /**
   * Start
   */
  start () {}
}

export default State
