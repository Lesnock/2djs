import { ButtonName } from '../../types'
import inputConfig from '../../../config/input'
import Controller from './controllers/Controller'

const controllers: { [name: string]: Controller } = {}

class Input {
  [controllerName: string]: any;

  static controllers = controllers

  /**
   * Get Controller instance
   */
  static getController (name: string) {
    return controllers[name]
  }

  /**
   * Add Controller to Input system
   */
  static addController (controller: Controller) {
    controllers[controller.name] = controller
  }

  /**
   * Shortcut for method 'get' of main controller
   */
  static get (name: ButtonName) {
    if (!controllers[inputConfig.mainController]) {
      throw new Error(`Controller ${inputConfig.mainController} does not exists.`)
    }

    return controllers[inputConfig.mainController].get(name)
  }

  /**
   * Update input system
   */
  static update () {
    Object.keys(controllers).forEach(controllerName => {
      controllers[controllerName].update()
    })
  }

  /**
   * Add listeners to keyboard keys
   */
  static listener () {
    Object.keys(controllers).forEach(controllerName => {
      controllers[controllerName].listener()
    })
  }
}

export default Input