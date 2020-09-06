import { ButtonName } from '../../types'
import Configs from '../Configs'
import Controller from './controllers/Controller'
import KeyboardController from './controllers/KeyboardController'

const controllers: { [name: string]: Controller } = {}

class Input {
  private config: Configs

  constructor (config: Configs) {
    this.config = config

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
    if (!this.config.mainController) {
      throw new Error('mainController config does not exists on input config file')
    }

    if (!controllers[this.config.mainController]) {
      throw new Error(`Controller ${this.config.mainController} does not exists.`)
    }

    return controllers[this.config.mainController].get(name)
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
