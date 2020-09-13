import { createBuffer } from '../helpers'

interface TileOptions {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  opacity?: number
}

class Tile {
  image: HTMLImageElement
  x: number
  y: number
  width: number
  height: number
  buffer: HTMLCanvasElement

  constructor (
    image: HTMLImageElement,
    { x = 0, y = 0, width, height }: TileOptions = {}
  ) {
    this.image = image
    this.x = x
    this.y = y

    this.width = !width ? this.image.width : width
    this.height = !height ? this.image.height : height

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

export default Tile
