class Vector {
  x: number;
  y: number;

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }

  addVector (vector: Vector) {
    this.x += vector.x
    this.y += vector.y
  }

  multiplyBy (number: number) {
    this.x *= number
    this.y *= number
  }
}

export default Vector
