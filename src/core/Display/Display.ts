class Display {
  canvas: HTMLCanvasElement
  graphics: CanvasRenderingContext2D

  constructor (width: number, height: number) {
    this.canvas = this.createCanvas(width, height)

    document.getElementById('app')?.appendChild(this.canvas)

    this.graphics = <CanvasRenderingContext2D> this.canvas.getContext('2d')
  }

  createCanvas (width: number, height: number) {
    const canvas = document.createElement('canvas')

    canvas.width = width
    canvas.height = height

    canvas.style.setProperty('image-rendering', 'pixelated')

    return canvas
  }

  getGraphics () {
    return this.graphics
  }
}

export default Display
