import { ButtonName } from '../../types'
import inputConfig from '../../../config/input'
import { DynamicObject } from '../../interfaces'
import Controller from './controllers/Controller'
import KeyboardController from './controllers/KeyboardController'

const controllers: { [name: string]: Controller } = {}

class Input implements DynamicObject {
  [key: string]: Controller | any;

  constructor () {
    this.addController(new KeyboardController())
  }

  get controllers () {
    return controllers
  }

  /**
   * Get Controller instance
   */
  getController (name: string) {
    return controllers[name]
  }

  /**
   * Add Controller to Input system
   */
  addController (controller: Controller) {
    controllers[controller.name] = controller
  }

  /**
   * Shortcut for method 'get' of main controller
   */
  get (name: ButtonName) {
    if (!controllers[inputConfig.mainController]) {
      throw new Error(`Controller ${inputConfig.mainController} does not exists.`)
    }

    return controllers[inputConfig.mainController].get(name)
  }

  /**
   * Update input system
   */
  update () {
    Object.keys(controllers).forEach(controllerName => {
      controllers[controllerName].update()
    })
  }

  /**
   * Add listeners to keyboard keys
   */
  listener () {
    Object.keys(controllers).forEach(controllerName => {
      controllers[controllerName].listener()
    })
  }
}

export default Input
