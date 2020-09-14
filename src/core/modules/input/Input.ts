import Game from '../Game'
import { Configs } from '../../interfaces'
import MouseController from './controllers/MouseController'
import KeyboardController from './controllers/KeyboardController'

class Input {
  keyboard: KeyboardController

  mouse: MouseController

  private configs: Configs

  constructor (game: Game, configs: Configs) {
    this.configs = configs

    this.keyboard = new KeyboardController()

    this.mouse = new MouseController(game)
  }

  listener () {
    this.keyboard.listener()
    this.mouse.listener()
  }
}

export default Input
