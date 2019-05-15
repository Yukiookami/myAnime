/* 预期功能
 *
 * 根据路径上的文章 id 查询所有评论
 *
 */

AV.Query.doCloudQuery(`select content, include author from CommentsDb where owner=pointer('ArticleDb',
'5cdbf8e76e9ba10068d7b483')`)
  .then(res =>
    console.log(res.results.map(r => {
      return {createdAt: r.createdAt, ...r.attributes}
    })))

setArticleCommentsVal(articleId) {
  let cql = `select count(*) from CommentsDb where owner=pointer('ArticleDb', '${articleId}')`

  AV.Query.doCloudQuery(cql)
    .then(res => {
      let comments =  res.count

      let cql2 = `update ArticleDb set comments = ${comments} where objectId = '${articleId}'`
      AV.Query.doCloudQuery(cql2).then(res => {
        console.log(`${articleId} 的评论数更新为 ${comments}`)
      }).catch(err => console.log(err.error))
    }).catch(err => console.log(err.error))
}

import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

export default {}
