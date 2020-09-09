import Globals from './Globals'
import Display from './Display'
import Input from './input/Input'
import Graphics from './Graphics'
import Loader from './loader/Loader'
import { Configs, Assets } from '../interfaces'
import LayerManager from './layers/LayerManager'

interface ChangeStateOptions {
  stopUpdate?: boolean;
  stopRender?: boolean
}

abstract class State {
  config!: Configs
  input!: Input
  display!: Display
  globals!: Globals
  loader!: Loader
  assets!: Assets
  layers: LayerManager
  canUpdate = true
  canRender = true

  private isChangingState = false

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
  async start (props?: {}): Promise<any> {}

  async changeState <T extends State>(state: T, props?: {}, { stopUpdate, stopRender }: ChangeStateOptions = {}) {
    if (this.isChangingState) {
      return
    }

    this.isChangingState = true

    this.canUpdate = !stopUpdate
    this.canRender = !stopRender
    this.globals.get('game').setCurrentState(state)
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
