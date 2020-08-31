import Globals from './Globals'
import Display from './Display'
import Input from './input/Input'
import Graphics from './Graphics'
import Loader from './loader/Loader'
import { GameConfigs } from '../interfaces'

abstract class State {
  config: GameConfigs
  input: Input
  display: Display
  globals: Globals
  loader: Loader

  abstract update (dt: number): void;
  abstract render (g: Graphics): void;

  /**
   * Start state - set modules
   */
  constructor ({ config, input, display, globals, loader }: any) {
    this.config = config
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
