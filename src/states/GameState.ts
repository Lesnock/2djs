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
  }

  update (dt: number) {
    if (Input.get('ArrowRight') || Input.get('KeyD')) {
      this.blockX += this.blockVelocity * dt
    }

    if (Input.get('ArrowLeft')) {
      this.blockX -= this.blockVelocity * dt
    }

    if (Input.get('ArrowDown')) {
      this.blockY += this.blockVelocity * dt
    }

    if (Input.get('ArrowUp')) {
      this.blockY -= this.blockVelocity * dt
    }
  }

  render (g: Graphics) {
    g.drawRect(this.blockX, this.blockY, 100, 100, '#550000')
  }
}

export default GameState
