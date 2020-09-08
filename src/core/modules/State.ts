import Globals from './Globals'
import Display from './Display'
import Input from './input/Input'
import Graphics from './Graphics'
import Loader from './loader/Loader'
import { Configs, Assets } from '../interfaces'
import LayerManager from './layers/LayerManager'

abstract class State {
  config!: Configs
  input!: Input
  display!: Display
  globals!: Globals
  loader!: Loader
  assets!: Assets
  layers: LayerManager

  canUpdate: boolean = true
  canRender: boolean = true

  constructor () {
    this.layers = new LayerManager()
  }

  update (dt: number): void {};
  render (g: Graphics): void {};

  /**
   * Set Game Modules
   */
  setModules ({ config, input, display, globals, loader, assets }: any) {
    this.config = config
    this.input = input
    this.display = display
    this.globals = globals
    this.loader = loader
    this.assets = assets
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
      loader: this.loader,
      assets: this.assets
    })

    await state.start(props)

    this.globals.set('currentState', state)
  }

  /**
   * Get Layer Graphics
   * @param index
   */
  onLayer (index: number) {
    return this.layers.get(index).g
  }
}

export default State
