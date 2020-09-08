import { createBuffer } from '../helpers'

class Sprite {
  image: HTMLImageElement
  x: number
  y: number
  width: number
  height: number
  buffer: HTMLCanvasElement

  constructor (image: HTMLImageElement, xCrop = 0, yCrop = 0, widthCrop?: number, heightCrop?: number) {
    this.image = image
    this.x = xCrop
    this.y = yCrop

    this.width = !widthCrop ? this.image.width : widthCrop
    this.height = !heightCrop ? this.image.height : heightCrop

    const buffer = createBuffer(this.width, this.height)

    buffer
      .getContext('2d')
      ?.drawImage(
        this.image,
        this.x, this.y,
        this.width, this.height,
        0, 0, this.width, this.height
      )

    this.buffer = buffer
  }
}

export default Sprite
