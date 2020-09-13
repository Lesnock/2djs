import Assets from '../Assets'
import { Loader } from '../../interfaces'

class JsonLoader implements Loader {
  load <T>(path: string): Promise<T> {
    if (Assets.json.has(path)) {
      return new Promise(resolve => {
        resolve(Assets.json.get(path))
      })
    }

    return new Promise(resolve => {
      fetch(path)
        .then(response => {
          response.json()
            .then(json => {
              resolve(json)
            })
        })
    })
  }
}

export default JsonLoader
