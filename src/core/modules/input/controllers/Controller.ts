import { ButtonName } from '../../../types'

abstract class Controller {
  abstract name: string;
  abstract keys: { [name: string]: boolean }

  abstract listener (): void;

  /**
   * Get status of a keyboard key
   */
  get (name: ButtonName): boolean {
    if (!this.keys[name]) {
      this.keys[name] = false
    }

    return this.keys[name]
  }

  /**
   * Update Controller
   */
  update () {}
}

export default Controller
