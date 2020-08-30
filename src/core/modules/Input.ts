import { ButtonName } from '../types'

const keys:any = {}

class Input {
  static get (name: ButtonName): boolean {
    if (!keys[name]) {
      keys[name] = false
    }

    return keys[name]
  }

  static listen () {
    // Key Down
    document.onkeydown = event => {
      event.preventDefault()
      keys[event.code] = true
    }

    // Key Up
    document.onkeyup = event => {
      event.preventDefault()
      keys[event.code] = false
    }
  }
}

export default Input
