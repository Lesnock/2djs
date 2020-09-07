import Globals from './Globals'
import Display from './Display'
import Input from './input/Input'
import Graphics from './Graphics'
import Loader from './loader/Loader'
import { Configs } from '../interfaces'

abstract class State {
  config!: Configs
  input!: Input
  display!: Display
  globals!: Globals
  loader!: Loader

  canUpdate: boolean = true
  canRender: boolean = true

  update (dt: number): void {};
  render (g: Graphics): void {};

  /**
   * Set Game Modules
   */
  setModules ({ config, input, display, globals, loader }: any) {
    this.config = config
    this.input = input
    this.display = display
    this.globals = globals
    this.loader = loader
  }

  /**
   * Start
   */
  async start (props?: {}) {}

  async changeToState <T extends State>(state: T, props?: {}) {
    state.setModules({
      config: this.config,
      input: this.input,
      display: this.display,
      globals: this.globals,
      loader: this.loader
    })

    await state.start(props)

    this.globals.set('currentState', state)
  }
}

export default State
