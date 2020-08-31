import Global from './Global'
import Display from './Display'
import Input from './input/Input'
import Graphics from './Graphics'

abstract class State {
  input: Input
  display: Display
  globals: Global

  abstract update (dt: number): void;
  abstract render (g: Graphics): void;

  constructor ({ input, display }: any) {
    this.input = input
    this.display = display
  }

  /**
   * Start
   */
  start () {}
}

export default State
