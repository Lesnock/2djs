import Assets from '../Assets'
import { Loader } from '../../interfaces'

class ImageLoader implements Loader {
  load (path: string): Promise<HTMLImageElement> {
    if (Assets.images.has(path)) {
      return new Promise(resolve => {
        resolve(Assets.images.get(path))
      })
    }

    const image = new Image()

    return new Promise(resolve => {
      image.onload = () => {
        Assets.images.set(path, image)
        resolve(image)
      }

      image.src = path
    })
  }
}

export default ImageLoader
