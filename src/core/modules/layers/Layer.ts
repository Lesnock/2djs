import configs from '../Configs'
import Graphics from '../Graphics'
import { createCanvas } from '../Display'

export interface LayerOptions {
  width?: number;
  height?: number;
  opacity?: number;
  isVisible?: boolean;
}

class Layer {
  g: Graphics
  isVisible = true
  opacity: number

  private canvas: HTMLCanvasElement

  constructor ({ width, height, opacity = 1, isVisible = true }: LayerOptions = {}) {
    const _width = !width ? configs.width : width

    const _height = !height ? configs.height : height

    // Create canvas and context
    this.canvas = createCanvas(_width, _height)

    const context = <CanvasRenderingContext2D> this.canvas.getContext('2d')

    // Set Graphics
    this.g = new Graphics(context)

    this.isVisible = isVisible

    this.opacity = opacity
  }

  render (g: Graphics) {
    g.context.save()
    g.context.globalAlpha = this.opacity
    g.context.drawImage(this.canvas, 0, 0)
    g.context.restore()
  }
}

export default Layer