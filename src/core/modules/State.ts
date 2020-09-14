import Globals from './Globals'
import Display from './Display'
import Input from './input/Input'
import Graphics from './Graphics'
import Loader from './loader/Loader'
import GameObject from './GameObject'
import LayerManager from './layers/LayerManager'
import { Configs, Assets, Modules } from '../interfaces'

interface ChangeStateOptions {
  stopUpdate?: boolean;
  stopRender?: boolean
}

abstract class State implements Modules {
  // Modules
  config!: Configs
  input!: Input
  display!: Display
  globals!: Globals
  loader!: Loader
  assets!: Assets

  // Layer
  layers: LayerManager
  canUpdate = true
  canRender = true

  gameObjects: GameObject[]

  private isChangingState = false

  constructor () {
    this.layers = new LayerManager()
    this.gameObjects = []
  }

  superUpdate (dt: number) {
    this.gameObjects.forEach(gameObject => {
      gameObject.superUpdate(dt)
      gameObject.update(dt)
    })
  }

  superRender (g: Graphics) {
    this.gameObjects.forEach(gameObject => {
      gameObject.superRender(g)
      gameObject.render(g)
    })
  }

  update (dt: number): void {};
  render (g: Graphics): void {};

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

  /**
   * Add Game Object to State, will update and render automatically
   * @param gameObject
   * @returns gameObject
   */
  addGameObject (gameObject: GameObject) {
    const length = this.gameObjects.push(gameObject)
    return this.gameObjects[length - 1]
  }
}

export default State
