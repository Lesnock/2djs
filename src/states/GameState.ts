import { State, Graphics } from '../core'

class GameState extends State {
  blockX!: number
  blockY!: number
  blockVelocity!: number;

  start () {
    this.blockX = 100
    this.blockY = 100
    this.blockVelocity = 100

    // this.globals.set({
    //   name: 'Caio',
    //   lastname: 'Lesnock'
    // })

    // this.globals.set('age', 24)

    // console.log(this.globals.all())
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
