import ImageLoader from './ImageLoader'

class Loader {
  /**
   * Load image
   */
  async loadImage (path: string): Promise<HTMLImageElement> {
    const loader = new ImageLoader()
    return loader.load(path)
  }
}

export default Loader
