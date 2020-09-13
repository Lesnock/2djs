import { Assets as IAssets } from '../interfaces'

const images = new Map()
const sheets = new Map()
const audios = new Map()
const json = new Map()
const tilemaps = new Map()

const Assets: IAssets = {
  images: images,
  sheets: sheets,
  audios: audios,
  json: json,
  tilemaps: tilemaps
}

Assets.images = images
Assets.sheets = sheets
Assets.audios = audios
Assets.json = json
Assets.tilemaps = tilemaps

export default Assets
