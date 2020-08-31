import State from './State'
import Config from './Config'
import Display from './Display'
import Globals from './Globals'
import Graphics from './Graphics'
import Input from './input/Input'
import Loader from './loader/Loader'
import { ConfigName } from '../types'
import gameConfig from '../../config/game'

class Game {
  config: Config
  input: Input
  globals: Globals
  display: Display
  loader: Loader
  currentState!: State

  constructor (configs: { [key in ConfigName]: any }) {
    this.config = new Config()

    if (!configs.title) {
      this.config.set('title', '2DJS')
    }

    if (!configs.width) {
      this.config.set('width', 800)
    }

    if (!configs.height) {
      this.config.set('height', 600)
    }

    for (const name in configs) {
      this.config.set(<ConfigName> name, configs[<ConfigName> name])
    }

    document.title = this.config.get('title')

    // Start display
    this.display = new Display(this.config.get('width'), this.config.get('height'))

    // Start Input
    this.input = new Input()
    this.input.listener()

    // Start Globals
    this.globals = new Globals()

    // Start Loader
    this.loader = new Loader()
  }

  async start () {
    await this.loadInitialState()

    await this.currentState?.start()

    this.runLoop()
  }

  async loadInitialState () {
    const imported = await import(`../../states/${gameConfig.initialState}`)

    const _stateClass = imported.default

    // Instantiate state and pass modules
    const initialState = new _stateClass({
      config: this.config,
      input: this.input,
      globals: this.globals,
      display: this.display,
      loader: this.loader
    })

    this.currentState = initialState
  }

  update (dt: number) {
    this.currentState.update(dt)
  }

  render (g: Graphics) {
    g.clear(this.display.width, this.display.height)

    this.currentState.render(g)
  }

  runLoop () {
    const fps = gameConfig.fps
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
