class Vector2D {
  x: number;
  y: number;

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }

  addVector (vector: Vector2D) {
    this.x += vector.x
    this.y += vector.y
  }

  multiplyBy (number: number) {
    this.x *= number
    this.y *= number
  }
}

export default Vector2D
