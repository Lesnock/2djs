const context:any = {}

class Context {
  static get (name: string): any {
    return context[name]
  }

  static set (name: string, data: any): void {
    context[name] = data
  }
}

export default Context
