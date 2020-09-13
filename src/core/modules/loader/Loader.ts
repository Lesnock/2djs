import Tilemap from '../Tilemap'
import Tileset from '../Tileset'
import ImageLoader from './ImageLoader'
import JsonLoader from './JsonLoader'
import TilemapLoader from './TilemapLoader'

class Loader {
  /**
   * Load image
   */
  async loadImage (path: string): Promise<HTMLImageElement> {
    const loader = new ImageLoader()
    return loader.load(path)
  }

  /**
   * Load image
   */
  async loadJSON<T>(path: string): Promise<T> {
    const loader = new JsonLoader()
    return loader.load(path)
  }

  /**
   * Load tilemap
   */
  async loadTilemap (path: string, tileset: Tileset): Promise<Tilemap> {
    const loader = new TilemapLoader()
    return loader.load(path, tileset)
  }
}

export default Loader
