import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

export default {
  // todo: 这里应该改为随机选择 6 张图片
  fetchImage() {
    var query = new AV.Query('slideShow')

    return query.find().then(function (pictures) {
      let urlArr = pictures.map(p => p.attributes.url)
      return urlArr
    }).catch(err => {
      Message.error('网络错误')
    })
  }
}
