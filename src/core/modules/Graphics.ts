import Tile from './Tile'
import Sprite from './Sprite'
import Animation from './Animation'
import { AnimationFrame } from '../interfaces'

class Graphics {
  context: CanvasRenderingContext2D

  constructor (context: CanvasRenderingContext2D) {
    this.context = context
  }

  clear (displayWidth: number, displayHeight: number) {
    this.context.clearRect(0, 0, displayWidth, displayHeight)
  }

  drawRect <T extends number> (x: T, y: T, width: T, height: T, color?: string) {
    this.context.save()

    if (color) {
      this.context.fillStyle = color
    }

    this.context.fillRect(x, y, width, height)

    this.context.restore()
  }

  drawSprite (sprite: Sprite, x: number, y: number, width?: number, height?: number) {
    const dWidth = !width ? sprite.width : width
    const dHeight = !height ? sprite.height : height

    this.context.drawImage(
      sprite.buffer,
      x, y,
      dWidth, dHeight
    )
  }

  drawTile (tile: Tile, x: number, y: number, width?: number, height?: number) {
    const dWidth = !width ? tile.width : width
    const dHeight = !height ? tile.height : height

    this.context.drawImage(
      tile.buffer,
      x, y,
      dWidth, dHeight
    )
  }

  drawAnimation (animation: Animation, x: number, y: number, width?: number, height?: number) {
    const currentFrame: AnimationFrame = animation.currentFrame
    let bufferOrImage = null

    if (currentFrame.frame instanceof Sprite || currentFrame.frame instanceof Tile) {
      bufferOrImage = currentFrame.frame.buffer
    } else {
      bufferOrImage = currentFrame.frame
    }

    const dWidth = !width ? currentFrame.frame.width : width
    const dHeight = !height ? currentFrame.frame.height : height

    this.context.drawImage(
      bufferOrImage,
      x, y,
      dWidth, dHeight
    )

    animation.update()
  }
}

export default Graphics
