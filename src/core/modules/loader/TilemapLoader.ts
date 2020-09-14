import Assets from '../Assets'
import Tilemap from '../Tilemap'
import Tileset from '../Tileset'
import JsonLoader from './JsonLoader'
import { Loader, JSONTilemap } from '../../interfaces'

class TilemapLoader implements Loader {
  load (path: string, tileset: Tileset): Promise<Tilemap> {
    if (Assets.tilemaps.has(path)) {
      return new Promise(resolve => {
        resolve(Assets.tilemaps.get(path))
      })
    }

    return new Promise(resolve => {
      (new JsonLoader()).load<JSONTilemap>(path)
        .then(json => {
          resolve(new Tilemap(json.tilemap.layers, tileset))
        })
    })
  }
}

export default TilemapLoader
