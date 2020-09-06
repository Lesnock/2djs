import { ButtonName } from '../../types'
import { Configs } from '../../interfaces'
import Controller from './controllers/Controller'
import KeyboardController from './controllers/KeyboardController'

const controllers: { [name: string]: Controller } = {}

class Input {
  private configs: Configs

  constructor (configs: Configs) {
    this.configs = configs

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
    if (!controllers[this.configs.mainController]) {
      throw new Error(`Controller ${this.configs.mainController} does not exists.`)
    }

    return controllers[this.configs.mainController].get(name)
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
