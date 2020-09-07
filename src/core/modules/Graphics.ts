import Sprite from './Sprite'
import Tile from './Tile'

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
    const dWidth = !width ? sprite.image.width : width
    const dHeight = !height ? sprite.image.height : height

    this.context.drawImage(
      sprite.buffer,
      x, y,
      dWidth, dHeight
    )
  }

  drawTile (tile: Tile, x: number, y: number, width?: number, height?: number) {
    const dWidth = !width ? tile.image.width : width
    const dHeight = !height ? tile.image.height : height

    this.context.drawImage(
      tile.buffer,
      x, y,
      dWidth, dHeight
    )
  }
}

export default Graphics
