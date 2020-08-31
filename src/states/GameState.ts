import { State, Graphics, Input } from '../core'

class GameState extends State {
  blockX: number
  blockY: number
  blockVelocity: number

  constructor () {
    super()

    this.blockX = 100
    this.blockY = 100
    this.blockVelocity = 100

    this.globals.set({
      name: 'Caio',
      lastname: 'Lesnock'
    })
  }

  update (dt: number) {
    if (Input.get('KeyA')) {
      this.blockX -= this.blockVelocity * dt
    }
  }

  render (g: Graphics) {
    g.drawRect(this.blockX, this.blockY, 100, 100, '#550000')
  }
}

export default GameState
