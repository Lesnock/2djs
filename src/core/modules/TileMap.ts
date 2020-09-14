import Tile from './Tile'
import Grid from './Grid'
import Tileset from './Tileset'
import Graphics from './Graphics'
import { MapLayer } from '../interfaces'

class Tilemap {
  map: Grid[];
  tileset: Tileset

  constructor (layers: MapLayer[], tileset: Tileset) {
    this.tileset = tileset

    this.map = []

    layers.forEach(layer => {
      const grid = new Grid()

      for (let row = 0; row < layer.rows; row++) {
        for (let column = 0; column < layer.columns; column++) {
          const index = ((row * layer.columns) + column)

          grid.set(row, column, tileset.getTile(layer.map[index]))
        }
      }

      this.map.push(grid)
    })
  }

  draw (g: Graphics) {
    this.map.forEach(layer => {
      layer.forEach((tile: Tile, row: number, column: number) => {
        g.drawTile(tile, column * this.tileset.tileWidth, row * this.tileset.tileHeight)
      })
    })
  }
}

export default Tilemap
