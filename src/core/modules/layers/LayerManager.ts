import Graphics from '../Graphics'
import Layer, { LayerOptions } from './Layer'

class LayerManager {
  layers: Layer[]

  constructor () {
    this.layers = []
  }

  add (options: LayerOptions = {}) {
    if (options.name) {
      const hasName = this.layers.find(layer => layer.name === options.name)

      if (hasName) {
        throw new Error(`Layer ${options.name} already exists`)
      }
    }

    const nextIndex = this.layers.length

    const layer = new Layer(options)

    this.layers.push(layer)

    return nextIndex
  }

  get (index: number): Layer {
    if (!this.layers[index]) {
      throw new Error(`Layer ${index} was not created`)
    }

    return this.layers[index]
  }

  render (g: Graphics) {
    this.layers.forEach(layer => {
      if (layer.isVisible) {
        layer.render(g)
      }
    })
  }
}

export default LayerManager
