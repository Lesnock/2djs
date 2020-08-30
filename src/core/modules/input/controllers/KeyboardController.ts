import Controller from './Controller'

class KeyboardController extends Controller {
  name = 'keyboard'
  keys: { [name: string]: boolean } = {}

  listener () {
    // Key Down
    document.onkeydown = event => {
      event.preventDefault()
      this.keys[event.code] = true
    }

    // Key Up
    document.onkeyup = event => {
      event.preventDefault()
      this.keys[event.code] = false
    }
  }
}

export default KeyboardController
