import { ButtonName } from '../../types'
import inputConfig from '../../../config/input'
import Controller from './controllers/Controller'
import KeyboardController from './controllers/KeyboardController'

const controllers: { [name: string]: Controller } = {}

class Input {
  constructor () {
    // Keyboard Controller is the default
    this.addController(new KeyboardController())
  }

  /**
   * Get all available controllers
   */
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
    if (!inputConfig.mainController) {
      throw new Error('mainController config does not exists on input config file')
    }

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
