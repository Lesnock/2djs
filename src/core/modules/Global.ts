const globalData:any = {}

class Global {
  static get (name: string): any {
    return globalData[name]
  }

  static set (name: string, data: any): void {
    globalData[name] = data
  }
}

export default Global
