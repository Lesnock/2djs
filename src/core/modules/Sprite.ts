import { createBuffer } from '../helpers'

interface SpriteOptions {
  xCrop?: number;
  yCrop?: number;
  widthCrop?: number;
  heightCrop?: number;
  opacity?: number
}

class Sprite {
  image: HTMLImageElement
  x: number
  y: number
  width: number
  height: number
  buffer: HTMLCanvasElement

  constructor (
    image: HTMLImageElement,
    { xCrop = 0, yCrop = 0, widthCrop, heightCrop, opacity = 1 }: SpriteOptions
  ) {
    this.image = image
    this.x = xCrop
    this.y = yCrop

    this.width = !widthCrop ? this.image.width : widthCrop
    this.height = !heightCrop ? this.image.height : heightCrop

    const buffer = createBuffer(this.width, this.height)

    const context = <CanvasRenderingContext2D> buffer.getContext('2d')

    // context.save()

    // Opacity
    context.globalAlpha = opacity

    context
      ?.drawImage(
        this.image,
        this.x, this.y,
        this.width, this.height,
        0, 0, this.width, this.height
      )

    // context.restore()

    this.buffer = buffer
  }
}

export default Sprite
