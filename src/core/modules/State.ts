import Globals from './Globals'
import Display from './Display'
import Input from './input/Input'
import Graphics from './Graphics'
import Loader from './loader/Loader'

abstract class State {
  input: Input
  display: Display
  globals: Globals
  loader: Loader

  abstract update (dt: number): void;
  abstract render (g: Graphics): void;

  /**
   * Start state - set modules
   */
  constructor ({ input, display, globals, loader }: any) {
    this.input = input
    this.display = display
    this.globals = globals
    this.loader = loader
  }

  /**
   * Start
   */
  async start () {}
}

export default State
