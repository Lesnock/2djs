import State from './State'
import Input from './Input'
import Display from './Display'
import Graphics from './Graphics'
import gameConfig from '../../config/game'

interface GameProps {
  title: string,
  width: number,
  height: number
}

class Game {
  display: Display
  initialState?: State

  constructor ({ title, width, height }: GameProps) {
    document.title = title

    this.display = new Display(width, height)

    // Start Input Listener
    Input.listen()
  }

  async start () {
    await this.loadInitialState()

    this.runLoop()
  }

  async loadInitialState () {
    const imported = await import(`../../states/${gameConfig.initialState}`)

    const _stateClass = imported.default

    const initialState = new _stateClass()

    this.initialState = initialState
  }

  update (dt: number) {
    this.initialState?.update(dt)
  }

  render (g: Graphics) {
    this.initialState?.render(g)
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
