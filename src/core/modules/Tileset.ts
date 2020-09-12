import ImageLoader from './loader/ImageLoader'

class Tileset {
  image!: HTMLImageElement;
  tileWidth: number;
  tileHeight: number;
  rows: number;
  columns: number;

  constructor (
    image: HTMLImageElement | string,
    tileWidth = 16,
    tileHeight = 16,
    rows: number,
    columns: number
  ) {
    let _image: unknown = null

    // Load image
    if (typeof image === 'string') {
      const imageLoader = new ImageLoader()
      imageLoader.load(image)
        .then(loadedImage => { _image = loadedImage })
    } else {
      _image = image
    }

    this.image = <HTMLImageElement> _image

    this.tileWidth = tileWidth
    this.tileHeight = tileHeight
    this.rows = rows
    this.columns = columns
  }

  /**
   * Get total quantity of tiles
   */
  get total () {
    return this.rows * this.columns
  }
}

export default Tileset
