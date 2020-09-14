import Point from './math/Point'
import Graphics from './Graphics'
import Vector from './math/Vector'
import Component from './Component'

abstract class GameObject {
  position: Point
  velocity: Vector
  private components: Component[]

  constructor () {
    this.position = new Point(0, 0)
    this.velocity = new Vector(0, 0)

    this.components = []
  }

  async superStart () {
    this.components.forEach(async component => {
      await component.start(this)
    })
  }

  async start () {
    //
  }

  superUpdate (dt: number) {
    // Update all components
    this.components.forEach(component => {
      component.update(dt)
    })

    this.move(dt)
  }

  superRender (g: Graphics) {
    // Render all components
    this.components.forEach(component => {
      component.render(g)
    })
  }

  update (dt: number) {
    //
  }

  render (g: Graphics) {
    //
  }

  beforeMoveX (dt: number) {
    //
  }

  beforeMoveY (dt: number) {
    //
  }

  private move (dt: number) {
    // Move X
    this.beforeMoveX(dt)

    this.position.x += this.velocity.x * dt

    // Only allow integers
    this.position.x = (this.velocity.x > 0)
      ? Math.ceil(this.position.x)
      : Math.floor(this.position.x)

    // Move Y
    this.beforeMoveY(dt)

    this.position.y += this.velocity.y * dt

    // Only allow integers
    this.position.y = (this.velocity.y > 0)
      ? Math.ceil(this.position.y)
      : Math.floor(this.position.y)
  }

  addComponent (component: Component) {
    this.components.push(component)
  }
}

export default GameObject
