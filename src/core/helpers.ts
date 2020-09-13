import Grid from './modules/Grid'

export function createBuffer (width: number, height: number) {
  const buffer = document.createElement('canvas')
  buffer.width = width
  buffer.height = height

  return buffer
}

export function arrayToGrid (array: any[], rows: number, columns: number) {
  const grid = new Grid()

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const index = ((row * columns) + column)

      grid.set(row, column, array[index])
    }
  }

  return grid
}
