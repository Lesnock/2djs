class Graphics {
  context: CanvasRenderingContext2D

  constructor (context: CanvasRenderingContext2D) {
    this.context = context
  }

  drawRect <T extends number> (x: T, y: T, width: T, height: T, color?: string) {
    this.context.save()

    if (color) {
      this.context.fillStyle = color
    }

    this.context.fillRect(x, y, width, height)

    this.context.restore()
  }
}

export default Graphics
