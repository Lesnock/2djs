class Grid {
  grid: any[] = []

  /**
   * Set a value to the grid
   * @param x
   * @param y
   * @param value
   */
  set (x: number, y: number, value: any) {
    if (!this.grid[x]) {
      this.grid[x] = []
    }

    this.grid[x][y] = value
  }

  /**
   * Get a value within the grid
   * @param x
   * @param y
   */
  get (x: number, y: number) {
    if (this.grid[x]) {
      return this.grid[x][y]
    }

    return undefined
  }

  /**
   * Verify if a position has a value in grid
   * @param x
   * @param y
   */
  has (x: number, y: number) {
    if (!this.grid[x]) {
      return false
    }

    if (!this.grid[x][y]) {
      return false
    }

    return true
  }

  /**
   * Executes a callback for each value in grid
   * @param callback
   */
  forEach (callback: Function) {
    this.grid.forEach((columns: [], x) => {
      columns.forEach((value, y) => {
        callback(value, x, y)
      })
    })
  }
}

export default Grid
