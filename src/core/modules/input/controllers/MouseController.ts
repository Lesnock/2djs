import Game from '../../Game'
import { Controller } from '../../../interfaces'

class MouseController implements Controller {
  name = 'mouse'

  canvasBounding: DOMRect

  cursor: {
    x: number
    y: number
  }

  private keys: {
    left: boolean
    right: boolean
    scrollClick: boolean
  }

  constructor (game: Game) {
    this.canvasBounding = game.display.canvas.getBoundingClientRect()

    this.cursor = { x: 0, y: 0 }
    this.keys = { left: false, right: false, scrollClick: false }
  }

  get left () {
    return this.keys.left
  }

  get right () {
    return this.keys.right
  }

  listener () {
    // Not show context on right click
    const display = <HTMLCanvasElement> document.getElementById('display')

    display.oncontextmenu = event => {
      event.preventDefault()
    }

    // Set cursor position
    document.onmousemove = event => {
      this.cursor.x = event.clientX - this.canvasBounding.left
      this.cursor.y = event.clientY - this.canvasBounding.top
    }

    // On button click
    document.onmousedown = event => {
      switch (event.button) {
        // left
        case 0:
          this.keys.left = true
          break
        case 1:
          this.keys.scrollClick = true
          break
        case 2:
          this.keys.right = true
      }
    }

    // On button release
    document.onmouseup = event => {
      switch (event.button) {
        // left
        case 0:
          this.keys.left = false
          break
        case 1:
          this.keys.scrollClick = true
          break
        case 2:
          this.keys.right = false
      }
    }
  }
}

export default MouseController
