import { ConfigName } from '../types'

class Config {
  configs!: {[key in ConfigName]: any}

  set (name: ConfigName, value: any) {
    this.configs[name] = value
  }

  get (name: ConfigName) {
    return this.configs[name]
  }
}

export default Config
