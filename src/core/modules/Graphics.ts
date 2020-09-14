import Tile from './Tile'
import Sprite from './Sprite'
import Tilemap from './Tilemap'
import Animation from './Animation'
import { AnimationFrame } from '../interfaces'
import LayerManager from './layers/LayerManager'

class Graphics {
  context: CanvasRenderingContext2D

  private layers!: LayerManager

  constructor (context: CanvasRenderingContext2D) {
    this.context = context
  }

  setLayers (layers: LayerManager) {
    this.layers = layers
  }

  on (index: number | string) {
    if (typeof index === 'string') {
      const layerIndex = this.layers.layers.findIndex(layer => layer.name === index)
      return this.layers.get(layerIndex).g
    }

    return this.layers.get(index).g
  }

  clear (displayWidth: number, displayHeight: number) {
    this.context.clearRect(0, 0, displayWidth, displayHeight)
  }

  drawRect <T extends number> (x: T, y: T, width: T, height: T, color?: string, opacity = 1) {
    this.context.save()

    if (color) {
      this.context.fillStyle = color
    }

    this.context.globalAlpha = opacity

    this.context.fillRect(x, y, width, height)

    this.context.restore()
  }

  drawSprite (sprite: Sprite, x: number, y: number, width?: number, height?: number, opacity = 1) {
    const dWidth = !width ? sprite.width : width
    const dHeight = !height ? sprite.height : height

    this.context.save()
    this.context.globalAlpha = opacity

    this.context.drawImage(
      sprite.buffer,
      x, y,
      dWidth, dHeight
    )

    this.context.restore()
  }

  drawTile (tile: Tile, x: number, y: number, width?: number, height?: number, opacity = 1) {
    const dWidth = !width ? tile.width : width
    const dHeight = !height ? tile.height : height

    this.context.save()
    this.context.globalAlpha = opacity

    this.context.drawImage(
      tile.buffer,
      x, y,
      dWidth, dHeight
    )

    this.context.restore()
  }

  drawAnimation (animation: Animation, x: number, y: number, width?: number, height?: number, opacity = 1) {
    const currentFrame: AnimationFrame = animation.currentFrame
    let bufferOrImage = null

    if (currentFrame.frame instanceof Sprite || currentFrame.frame instanceof Tile) {
      bufferOrImage = currentFrame.frame.buffer
    } else {
      bufferOrImage = currentFrame.frame
    }

    const dWidth = !width ? currentFrame.frame.width : width
    const dHeight = !height ? currentFrame.frame.height : height

    this.context.save()
    this.context.globalAlpha = opacity

    this.context.drawImage(
      bufferOrImage,
      x, y,
      dWidth, dHeight
    )

    this.context.restore()

    animation.update()
  }

  drawTilemap (tilemap: Tilemap) {
    tilemap.draw(this)
  }
}

export default Graphics
