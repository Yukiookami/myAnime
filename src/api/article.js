import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

export default {
  getArticleDetail({id}) {
    return new Promise((resolve, reject) => {
      let cql = `select * from ArticleDb where objectId = '${id}'`

      AV.Query.doCloudQuery(cql)
        .then(res => {
          let posts = res.results.map(r => {
            return {id: r.id, createdAt: r.createdAt, ...r.attributes}
          })
          if(posts.length === 0) {
            Message.error('获取文章内容失败')
            reject()
          }
          resolve(posts[0])
        })
        .catch(err => {
          Message.error('获取文章内容失败')
          reject(err)
        })
    })
  }
}
