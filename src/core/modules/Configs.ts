import { ConfigName } from '../types'

class Configs {
  private configs!: { [key in ConfigName]?: any }

  constructor (configs: { [key in ConfigName]?: any }) {
    for (const name in configs) {
      this.set(<ConfigName>name, configs[<ConfigName>name])
    }

    // Default Configs
    this.configs = {
      title: '2DJS',
      width: 800,
      height: 600,
      fps: 60,
      mainController: 'keyboard'
    }
  }

  set (name: ConfigName, value: any) {
    this.configs[name] = value
  }

  get (name: ConfigName) {
    return this.configs[name]
  }
}

export default Configs
