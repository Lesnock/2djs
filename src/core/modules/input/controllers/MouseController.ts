import Game from '../../Game'
import { Controller } from '../../../interfaces'

class MouseController implements Controller {
  name = 'mouse'

  canvasBounding: DOMRect

  cursor: {
    x: number
    y: number
  }

  buttons: {
    left: boolean
    right: boolean
    scroll: boolean
  }

  private scrollEvents: {
    up: Function []
    down: Function []
  }

  constructor (game: Game) {
    this.canvasBounding = game.display.canvas.getBoundingClientRect()

    this.cursor = { x: 0, y: 0 }
    this.buttons = { left: false, right: false, scroll: false }
    this.scrollEvents = { up: [], down: [] }
  }

  onScrollUp (callback: Function) {
    this.scrollEvents.up.push(callback)
  }

  onScrollDown (callback: Function) {
    this.scrollEvents.down.push(callback)
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
          this.buttons.left = true
          break
        case 1:
          this.buttons.scroll = true
          break
        case 2:
          this.buttons.right = true
      }
    }

    // On button release
    document.onmouseup = event => {
      switch (event.button) {
        // left
        case 0:
          this.buttons.left = false
          break
        case 1:
          this.buttons.scroll = false
          break
        case 2:
          this.buttons.right = false
      }
    }

    document.onwheel = event => {
      // Scrolling down
      if (event.deltaY > 0) {
        this.scrollEvents.down.forEach(callback => {
          callback()
        })
      } else {
        // Scrolling up
        this.scrollEvents.up.forEach(callback => {
          callback()
        })
      }
    }
  }
}

export default MouseController
