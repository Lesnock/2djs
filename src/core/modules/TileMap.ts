import Tile from './Tile'
import Grid from './Grid'
import Tileset from './Tileset'
import Graphics from './Graphics'

class Tilemap {
  map: Grid;
  rows: number;
  columns: number;
  tileset: Tileset;

  constructor (tileset: Tileset, map: number[], rows: number = 0, columns: number = 0) {
    this.tileset = tileset
    this.rows = rows
    this.columns = columns

    const grid = new Grid()

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const index = ((row * columns) + column)

        grid.set(row, column, tileset.getTile(map[index]))
      }
    }

    this.map = grid
  }

  draw (g: Graphics) {
    this.map.forEach((tile: Tile, row: number, column: number) => {
      g.drawTile(tile, column * this.tileset.tileWidth, row * this.tileset.tileHeight)
    })
  }
}

export default Tilemap
