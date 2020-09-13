import Tile from './Tile'

class Tileset {
  image!: HTMLImageElement;
  tileWidth: number;
  tileHeight: number;
  rows: number;
  columns: number;
  tiles: Tile[];

  constructor (
    image: HTMLImageElement,
    tileWidth = 16,
    tileHeight = 16,
    rows: number,
    columns: number
  ) {
    this.image = image

    this.tileWidth = tileWidth
    this.tileHeight = tileHeight
    this.rows = rows
    this.columns = columns
    this.tiles = []

    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        const x = column * this.tileWidth
        const y = row * this.tileHeight

        this.tiles.push(new Tile(this.image, {
          x,
          y,
          width: this.tileWidth,
          height: this.tileHeight
        }))
      }
    }
  }

  /**
   * Get total quantity of tiles
   */
  get total () {
    return this.rows * this.columns
  }

  /**
   * Get specific tile on Tileset
   * @param index
   */
  getTile (index: number) {
    return this.tiles[index]
  }
}

export default Tileset
