import Game from './core/Game'

document.onload = () => {
  const game = new Game({
    title: 'Game',
    width: 800,
    height: 600
  })

  game.run()
}
