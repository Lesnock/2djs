import ImageLoader from './ImageLoader'

class Loader {
  /**
   * Load image
   */
  async loadImage (path: string) {
    const loader = new ImageLoader()
    return loader.load(path)
  }
}

export default Loader
