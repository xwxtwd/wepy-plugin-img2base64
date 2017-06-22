/**
 * Created by JSon on 2017/6/22.
 */
import path from 'path'
import fs from 'fs'
import mime from 'mime'

export default class {

  constructor (c = {}) {
    this.setting = Object.assign({}, {
      css: true,
      html: false
    }, c)
  }

  apply (op) {
    const {code} = op
    if (code) {
      const reg = /(\/\w+)+\w+\.(png|jpg|gif|jpeg)/gi
      const imgPaths = code.match(reg) || []
      imgPaths.map(imgPath => {
        const pathFile = path.join(process.cwd(), imgPath)
        try {
          const bData = fs.readFileSync(pathFile)
          const base64Str = bData.toString('base64')
          const mimeType = mime.lookup(pathFile)
          const dataUri = `data:${mimeType};base64,${base64Str}`
          op.code = op.code.replace(imgPath, `${dataUri}`)
        } catch(e) {
          console.err('读取图片失败')
        }
      })
    }
    op.next()
  }
}
