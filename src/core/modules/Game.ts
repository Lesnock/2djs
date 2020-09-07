import State from './State'
import configs from './Configs'
import Display from './Display'
import Globals from './Globals'
import Graphics from './Graphics'
import Input from './input/Input'
import Loader from './loader/Loader'
import { ConfigName } from '../types'
import { Configs } from '../interfaces'

class Game {
  config: Configs
  input: Input
  globals: Globals
  display: Display
  loader: Loader
  currentState!: State

  constructor (_configs: { [key in ConfigName]: any}) {
    this.config = { ...configs, ..._configs }

    document.title = this.config.title

    // Start display
    this.display = new Display(this.config.width, this.config.height)

    // Start Input
    this.input = new Input(this.config)
    this.input.listener()

    // Start Globals
    this.globals = new Globals()

    // Start Loader
    this.loader = new Loader()
  }

  async start (initialState: State) {
    if (!initialState) {
      throw new Error('A initial state is required to start the game.')
    }

    if (!(initialState instanceof State)) {
      throw new Error('initialState should be an instance of State')
    }

    // Pass modules to state
    initialState.setModules({
      config: this.config,
      input: this.input,
      globals: this.globals,
      display: this.display,
      loader: this.loader
    })

    this.currentState = initialState
    this.globals.set('currentState', initialState)

    this.globals.get('currentState').start()

    this.runLoop()
  }

  /**
   * Set the current state of the game
   */
  setCurrentState <T extends State>(state: T) {
    this.globals.set('currentState', state)
  }

  update (dt: number) {
    const currentState = this.globals.get('currentState')

    if (currentState.canUpdate) {
      currentState.update(dt)
    }
  }

  render (g: Graphics) {
    g.clear(this.display.width, this.display.height)

    const currentState = this.globals.get('currentState')

    if (currentState.canRender) {
      currentState.render(g)
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
