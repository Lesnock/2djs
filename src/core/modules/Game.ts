import State from './State'
import Assets from './Assets'
import configs from './Configs'
import Display from './Display'
import Globals from './Globals'
import Graphics from './Graphics'
import Input from './input/Input'
import Loader from './loader/Loader'
import { ConfigName } from '../types'
import { Configs, Assets as IAssets, Modules } from '../interfaces'

class Game {
  config: Configs
  input: Input
  globals: Globals
  display: Display
  loader: Loader
  assets: IAssets
  currentState!: State

  constructor (_configs: { [key in ConfigName]: any}) {
    this.config = { ...configs, ..._configs }

    document.title = this.config.title

    // Start display
    this.display = new Display(this.config.width, this.config.height)

    // Start Input
    this.input = new Input(this, this.config)
    this.input.listener()

    // Start Globals
    this.globals = new Globals()

    // Start Loader
    this.loader = new Loader()

    // Assets
    this.assets = Assets

    this.globals.set('game', this)
  }

  async start (initialState: State) {
    if (!initialState) {
      throw new Error('A initial state is required to start the game.')
    }

    await this.initializeState(initialState)

    this.runLoop()
  }

  async initializeState (state: State) {
    if (!(state instanceof State)) {
      throw new Error('initialState should be an instance of State')
    }

    // Pass modules to state
    this.setModulesToObject(state)

    await state.start()

    // Start gameObjects
    state.gameObjects.forEach(async gameobject => {
      this.setModulesToObject(gameobject)
      gameobject.state = state
      await gameobject.start()
    })

    this.display.graphics.setLayers(state.layers)

    this.currentState = state

    this.globals.set('currentState', state)
  }

  /**
   * Set the current state of the game
   */
  async setCurrentState <T extends State>(state: T) {
    await this.initializeState(state)
  }

  /**
   * Set all modules to classes that implements Modules
   * @param state
   */
  setModulesToObject (object: Modules) {
    // Pass modules to object
    object.config = this.config
    object.input = this.input
    object.globals = this.globals
    object.display = this.display
    object.loader = this.loader
    object.assets = this.assets
  }

  update (dt: number) {
    const currentState = this.globals.get('currentState')

    if (currentState.canUpdate) {
      currentState.superUpdate(dt)
      currentState.update(dt)
    }
  }

  render (g: Graphics) {
    g.clear(this.display.width, this.display.height)

    if (this.currentState.canRender) {
      this.currentState.render(g)
      this.currentState.superRender(g)
      this.currentState.layers.render(g)
    }
  }

  runLoop () {
    const fps = this.config.fps
    const deltaTime = 1 / fps
    let lastTime = 0
    let timer = 0

    let now

    const loop = () => {
      now = performance.now()

      // Timer in miliseconds
      timer += (now - lastTime) / 100

      if (timer > 1) {
        timer = 1
      }

      // Exec all overflow timer compared to delta
      while (timer > deltaTime) {
        this.update(deltaTime)
        this.render(this.display.graphics)
        timer -= deltaTime
      }

      lastTime = now

      requestAnimationFrame(loop)
    }

    loop()
  }
}

export default Game
