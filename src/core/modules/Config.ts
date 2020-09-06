import { ConfigName } from '../types'

class Config {
  private configs!: { [key in ConfigName]?: any }

  constructor () {
    // Default Configs
    this.configs = {
      title: '2DJS',
      width: 800,
      height: 600,
      fps: 60
    }
  }

  set (name: ConfigName, value: any) {
    this.configs[name] = value
  }

  get (name: ConfigName) {
    return this.configs[name]
  }
}

export default Config
