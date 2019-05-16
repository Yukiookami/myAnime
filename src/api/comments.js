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
  setCommentsNum({articleId, commentsNum}) {
    return new Promise((resolve, reject) => {
      let cql = `update ArticleDb set comments = ${commentsNum} where objectId = '${articleId}'`

      AV.Query.doCloudQuery(cql).then(res => {
        resolve(res)
      }).catch(err => {
        Message.error('评论数更新失败')
        reject(err)
      })
    })
  }
}
