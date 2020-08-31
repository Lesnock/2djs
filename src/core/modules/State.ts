import Globals from './Globals'
import Display from './Display'
import Input from './input/Input'
import Graphics from './Graphics'

abstract class State {
  input: Input
  display: Display
  globals: Globals

  abstract update (dt: number): void;
  abstract render (g: Graphics): void;

  /**
   * Start state - set modules
   */
  constructor ({ input, display, globals }: any) {
    this.input = input
    this.display = display
    this.globals = globals
  }

  /**
   * Start
   */
  start () {}
}

export default State
