import LoaderInterface from './LoaderInterface'

class ImageLoader implements LoaderInterface {
  load (path: string): Promise<HTMLImageElement> {
    const image = new Image()

    return new Promise(resolve => {
      image.onload = () => {
        resolve(image)
      }

      image.src = path
    })
  }
}

export default ImageLoader
