import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

// 这里 tags 默认为 %% 是为了在无 tags 时匹配全部
export default {
  getArticles({tag='%%', category='', search='', page=1} = {tags: '%%', category: '', search: '', page: 1}) {
    return new Promise((resolve, reject) => {
      let cql = `select title, views, cover, intro, tags, comments from ArticleDb
      where tags like '${tag}'
      and category like '%${category}%'
      and title like '%${search}%'
      limit ${page - 1}, 8
      order by createdAt`

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
