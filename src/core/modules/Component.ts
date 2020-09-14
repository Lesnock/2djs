import GameObject from './GameObject'
import Graphics from './Graphics'

abstract class Component {
  gameObject!: GameObject;

  abstract name: string;

  async start (gameObject: GameObject) {
    this.gameObject = gameObject
  }

  update (dt: number) {
    //
  }

  render (g: Graphics) {
    //
  }
}

export default Component
