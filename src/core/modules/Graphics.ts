class Graphics {
  context: CanvasRenderingContext2D

  constructor (context: CanvasRenderingContext2D) {
    this.context = context
  }

  drawRect <T extends number> (x: T, y: T, width: T, height: T) {
    this.context.fillRect(x, y, width, height)
  }
}

export default Graphics
