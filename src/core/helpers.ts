export function createBuffer (width: number, height: number) {
  const buffer = document.createElement('canvas')
  buffer.width = width
  buffer.height = height

  return buffer
}
