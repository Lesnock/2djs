import { Controller } from '../../../interfaces'
import { KeyboardButtonName } from '../../../types'

class KeyboardController implements Controller {
  name = 'keyboard'

  keys: { [name: string]: boolean; } = {}

  /**
   * Get status of a keyboard key
   */
  get (name: KeyboardButtonName): boolean {
    if (!this.keys[name]) {
      this.keys[name] = false
    }

    return this.keys[name]
  }

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
