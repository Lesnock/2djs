import Tile from './Tile'
import Sprite from './Sprite'
import Graphics from './Graphics'
import Animation from './Animation'
import { AnimationFrame } from '../interfaces'

interface SpriteSheetAnimationFrame {
  frame: string | Sprite | HTMLImageElement;
  speed: number
}

class SpriteSheet {
  image: HTMLImageElement
  tiles: Map<number, Tile>
  sprites: Map<string, Sprite>
  animations: Map<string, Animation>

  constructor (image: HTMLImageElement) {
    this.image = image

    this.tiles = new Map()
    this.sprites = new Map()
    this.animations = new Map()
  }

  defineTile (id: number, x: number, y: number, width?: number, height?: number) {
    const tile = new Tile(this.image, { x, y, width: width, height: height })
    this.tiles.set(id, tile)

    return tile
  }

  defineSprite (name: string, x: number, y: number, width?: number, height?: number) {
    const sprite = new Sprite(this.image, {
      x, y, width: width, height: height
    })
    this.sprites.set(name, sprite)

    return sprite
  }

  defineAnimation (name: string, frames: SpriteSheetAnimationFrame[], loop = true) {
    // Transform string frames in real sprites
    const fixedFrames = frames.map((frame): AnimationFrame => {
      if (typeof frame.frame === 'string') {
        const sprite: Sprite = <Sprite> this.sprites.get(frame.frame)

        if (!sprite) {
          throw new Error(`Sprite ${frame.frame} does not exists in spritesheet`)
        }

        return {
          frame: sprite,
          speed: frame.speed
        }
      }

      return <AnimationFrame> frame
    })

    const animation = new Animation(fixedFrames, loop)
    this.animations.set(name, animation)

    return animation
  }

  drawSprite (g: Graphics, name: string, x: number, y: number, width?: number, height?: number) {
    if (!this.sprites.has(name)) {
      throw new Error(`Sprite ${name} does not exists in spritesheet`)
    }

    g.drawSprite(
      <Sprite> this.sprites.get(name),
      x, y,
      width, height
    )
  }

  drawTile (g: Graphics, id: number, x: number, y: number, width?: number, height?: number) {
    if (!this.tiles.has(id)) {
      throw new Error(`Tile ${id} does not exists in spritesheet`)
    }

    g.drawTile(
      <Tile> this.tiles.get(id),
      x, y,
      width, height
    )
  }

  drawAnimation (g: Graphics, name: string, x: number, y: number, width?: number, height?: number) {
    if (!this.animations.has(name)) {
      throw new Error(`Animation ${name} does not exists in spritesheet`)
    }

    g.drawAnimation(
      <Animation> this.animations.get(name),
      x, y,
      width, height
    )
  }
}

export default SpriteSheet
