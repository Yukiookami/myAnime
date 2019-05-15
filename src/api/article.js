import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

export default {
  getArticles({page = 1} = {page: 1}) {
    return new Promise((resolve, reject) => {
      let cql = `select title, views, cover, intro, tags from ArticleDb limit ${page - 1}, 8`

      AV.Query.doCloudQuery(cql)
        .then(res => {
          let posts = res.results.map(r => {
            return {id: r.id, createdAt: r.createdAt, ...r.attributes}
          })
          resolve(posts)
        })
        .catch(err => {
          Message.error('获取文章列表失败')
          reject(err)
        })
    })
  }
}
