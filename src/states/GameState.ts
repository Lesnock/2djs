import { State, Graphics, Input } from '../core'

class GameState extends State {
  update () {
  }

  render (g: Graphics) {
    g.drawRect(100, 100, 100, 100, '#550000')
  }
}

export default GameState
