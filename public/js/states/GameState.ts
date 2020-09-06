import { State, Graphics, Globals } from '../../../src/core'

class GameState extends State {
  blockX!: number
  blockY!: number
  blockVelocity!: number;

  async start () {
    this.blockX = 100
    this.blockY = 100
    this.blockVelocity = 100

    const globals = new Globals()

    globals.set({
      name: 'Caio',
      lastname: 'Lesnock'
    })

    console.log(await this.loader.loadImage('images/test.jpg'))
  }

  update (dt: number) {
    if (this.input.get('KeyA')) {
      this.blockX -= this.blockVelocity * dt
    }
  }

  render (g: Graphics) {
    g.drawRect(this.blockX, this.blockY, 100, 100, '#550000')
  }
}

export default GameState
