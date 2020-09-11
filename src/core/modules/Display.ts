import Graphics from './Graphics'

/**
 * Create a canvas Element
 * @param width
 * @param height
 */
export function createCanvas (width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas')

  canvas.id = 'display'
  canvas.width = width
  canvas.height = height

  canvas.style.setProperty('image-rendering', 'pixelated')

  return canvas
}

class Display {
  width: number
  height: number
  graphics: Graphics
  canvas: HTMLCanvasElement

  constructor (width: number, height: number) {
    this.width = width
    this.height = height

    this.canvas = createCanvas(width, height)

    document.getElementById('app')?.appendChild(this.canvas)

    this.graphics = new Graphics(
      <CanvasRenderingContext2D> this.canvas.getContext('2d')
    )
  }

  getGraphics () {
    return this.graphics
  }
}

export default Display
