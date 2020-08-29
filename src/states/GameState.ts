import State from '../core/State/State'

class GameState extends State {
  update (dt: number) {

  }

  render (g: CanvasRenderingContext2D) {
    g.fillRect(100, 100, 100, 100)
  }
}

export default GameState
