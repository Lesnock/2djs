import { ButtonName } from '../../../types'

abstract class Controller {
  abstract name: string;

  abstract listener (): void;

  keys: { [name: string]: boolean; };

  constructor () {
    this.keys = {}
  }

  /**
   * Get status of a keyboard key
   */
  get (name: ButtonName): boolean {
    if (!this.keys[name]) {
      this.keys[name] = false
    }

    return this.keys[name]
  }
}

export default Controller
