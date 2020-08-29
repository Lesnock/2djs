import Display from './Display/Display'

interface Game {
  display: Display
}

interface GameProps {
  title: string,
  width: number,
  height: number
}

class Game {
  constructor ({ title, width, height }: GameProps) {
    document.title = title

    this.display = new Display()
    this.display.createDisplay(width, height)
  }

  run () {
    console.log('running')
  }
}

export default Game
