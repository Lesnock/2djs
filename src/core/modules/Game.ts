import State from './State'
import Display from './Display'
import Globals from './Globals'
import Graphics from './Graphics'
import Input from './input/Input'
import gameConfig from '../../config/game'
import KeyboardController from './input/controllers/KeyboardController'

interface GameProps {
  title: string,
  width: number,
  height: number
}

class Game {
  input: Input
  globals: Globals
  display: Display
  currentState!: State

  constructor ({ title, width, height }: GameProps) {
    document.title = title

    this.display = new Display(width, height)

    // Start Input
    this.input = new Input()
    this.input.addController(new KeyboardController())
    this.input.listener()

    // Start Global
    this.globals = new Globals()
  }

  async start () {
    await this.loadInitialState()

    this.currentState?.start()

    this.runLoop()
  }

  async loadInitialState () {
    const imported = await import(`../../states/${gameConfig.initialState}`)

    const _stateClass = imported.default

    const initialState = new _stateClass({
      input: this.input,
      globals: this.globals,
      display: this.display
    })

    this.currentState = initialState
  }

  update (dt: number) {
    this.input.update()
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
