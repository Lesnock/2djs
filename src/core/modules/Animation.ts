import { AnimationFrame } from '../interfaces'

class Animation {
  frames: AnimationFrame[]
  size: number
  loop: boolean
  index: number
  lastTime: number
  timer: number
  canPlay: boolean

  constructor (frames: AnimationFrame[], loop = false) {
    this.frames = frames
    this.loop = loop
    this.size = this.frames.length
    this.index = 0
    this.lastTime = new Date().getTime()
    this.timer = 0
    this.canPlay = true
  }

  get currentFrame () {
    return this.frames[this.index]
  }

  update () {
    if (!this.canPlay) {
      return
    }

    this.timer += new Date().getTime() - this.lastTime
    this.lastTime = new Date().getTime()

    const frameSpeed = this.frames[this.index].speed

    if (this.timer < frameSpeed) {
      return
    }

    this.index++
    this.timer = 0

    if (this.index >= this.size) {
      if (!this.loop) {
        this.index = this.size - 1 // -1 because index starts on zero
        this.canPlay = false
        return
      }

      this.index = 0
    }
  }
}

export default Animation
