import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

export default {
  getComments({articleId, page = 1} = {page: 1}) {
    return new Promise((resolve, reject) => {
      let cql = `select content, include author from CommentsDb 
      where owner=pointer('ArticleDb','${articleId}')`

      AV.Query.doCloudQuery(cql).then(res => {
          let commentsArr = res.results.map(r => {
            return {id: r.id, createdAt: r.createdAt, ...r.attributes}
          })
        resolve(commentsArr)
      }).catch(err => {
        Message.error('获取评论列表失败')
        reject(err)
      })
    })
  },
  setArticleCommentsVal(articleId) {
    let cql = `select count(*) from CommentsDb 
    where owner=pointer('ArticleDb', '${articleId}')`

    AV.Query.doCloudQuery(cql).then(res => {
      let comments = res.count

      let cql2 = `update ArticleDb set comments = ${comments} where objectId = '${articleId}'`
      AV.Query.doCloudQuery(cql2).then(res => {
        console.log(`${articleId} 的评论数更新为 ${comments}`)
      })
    }).catch(err => {
      Message.error('获取评论数失败')
    })
  }
}
