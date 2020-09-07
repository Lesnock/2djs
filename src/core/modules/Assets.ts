import { Assets as IAssets } from '../interfaces'

const images = new Map()
const sheets = new Map()
const audios = new Map()
const json = new Map()

const Assets: IAssets = {
  images: images,
  sheets: sheets,
  audios: audios,
  json: json
}

Assets.images = images
Assets.sheets = sheets
Assets.audios = audios
Assets.json = json

export default Assets
