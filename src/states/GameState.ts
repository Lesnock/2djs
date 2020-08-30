import { State, Graphics } from '../core'

class GameState extends State {
  update () {

  }

  render (g: Graphics) {
    g.drawRect(100, 100, 100, 100)
  }
}

export default GameState
