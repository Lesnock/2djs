import { DynamicObject } from '../interfaces'

const globalData: DynamicObject = {}

class Globals {
  /**
   * Get data from global data
   */
  get (key: string | string[]): any {
    // Sent array
    if (Array.isArray(key)) {
      const data: DynamicObject = {}

      key.forEach(keyName => {
        if (typeof keyName !== 'string') {
          throw new Error('Key name from global data should be a string')
        }

        data[keyName] = globalData[keyName]
      })

      return data
    }

    // Sent string (unique value)
    if (typeof key === 'string') {
      return globalData[key]
    }
  }

  /**
   * Get all global data
   */
  all () {
    return globalData
  }

  /**
   * Set data to global data
   */
  set (key: string | object, data?: any): void {
    // Sent object
    if (typeof key === 'object') {
      Object.keys(key).forEach((keyName: string) => {
        const object: DynamicObject = key

        this.set(keyName, object[keyName])
      })

      return
    }

    globalData[key] = data
  }
}

export default Globals
