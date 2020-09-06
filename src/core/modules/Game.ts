import State from './State'
import Configs from './Configs'
import Display from './Display'
import Globals from './Globals'
import Graphics from './Graphics'
import Input from './input/Input'
import Loader from './loader/Loader'
import { Configs as ConfigType } from '../types'

class Game {
  config: Configs
  input: Input
  globals: Globals
  display: Display
  loader: Loader
  currentState!: State

  constructor (configs: ConfigType) {
    this.config = new Configs(configs)

    document.title = this.config.get('title')

    // Start display
    this.display = new Display(this.config.get('width'), this.config.get('height'))

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

    await this.currentState?.start()

    this.runLoop()
  }

  update (dt: number) {
    this.currentState.update(dt)
  }

  render (g: Graphics) {
    g.clear(this.display.width, this.display.height)

    this.currentState.render(g)
  }

  runLoop () {
    const fps = this.config.get('fps')
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
