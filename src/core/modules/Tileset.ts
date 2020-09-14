import Tile from './Tile'
import { TileOptions } from '../interfaces'

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
   * Set a specific tile
   * @param tile
   * @returns Index of tile
   */
  setTile (tile: Tile | TileOptions) {
    if (tile instanceof Tile) {
      this.tiles.push(tile)
    }

    this.tiles.push(new Tile(this.image, {
      x: tile.x,
      y: tile.y,
      width: tile.width,
      height: tile.height
    }))

    return this.tiles.length - 1
  }

  /**
   * Get total quantity of tiles
   */
  get total () {
    return this.tiles.length
  }

  /**
   * Get specific tile on Tileset
   * @param index
   */
  getTile (index: number) {
    return this.tiles[index]
  }

  /**
   * Creates a tileset from a array of  tiles
   * @param image
   * @param tilesetArray
   * @param tileWidth
   * @param tileHeight
   */
  static fromArray (image: HTMLImageElement, tileWidth: number, tileHeight: number, tilesetArray: Array<Tile | TileOptions>) {
    const tileset = new Tileset(image, tileWidth, tileHeight, 0, 0)

    tilesetArray.forEach(tile => {
      tileset.setTile(tile)
    })

    return tileset
  }

  /**
   * Creates a tileset from a object of tiles ex: { 0: tile, 1: tile }
   * @param image
   * @param tilesetObject
   * @param tileWidth
   * @param tileHeight
   */
  static fromObject (image: HTMLImageElement, tileWidth: number, tileHeight: number, tilesetObject: { [key: number]: Tile | TileOptions }) {
    const tileset = new Tileset(image, tileWidth, tileHeight, 0, 0)

    Object.keys(tilesetObject).forEach(index => {
      if (isNaN(Number(index))) {
        throw new Error('tileset object keys should be numbers')
      }

      tileset.setTile(tilesetObject[Number(index)])
    })

    return tileset
  }
}

export default Tileset
