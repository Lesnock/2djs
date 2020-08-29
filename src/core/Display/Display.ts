class Display {
  createCanvas (width: number, height: number) {
    const canvas = document.createElement('canvas')

    canvas.width = width
    canvas.height = height

    canvas.style.setProperty('image-rendering', 'pixelated')

    return canvas
  }

  createDisplay (width: number, height: number) {
    const canvas = this.createCanvas(width, height)
    canvas.id = 'display'

    // Add canvas to the document
    document.getElementById('app')?.appendChild(canvas)
  }
}

export default Display
