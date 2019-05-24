import request from '@/helpers/request.js'

const CQL = {
  GET_ARTICLE_DETAIL: "select * from ArticleDb where objectId = '{{id}}'",
  SET_ARTICLE_VIEWS: "update ArticleDb set views = op('Increment', {'amount': 1}) where objectId = '{{id}}'",
  SET_ARTICLE_COMMENTS: "update ArticleDb set comments = {{num}} where objectId = '{{id}}'",
}

export default {
  getArticleDetail({id}) {
    return request(CQL.GET_ARTICLE_DETAIL, {id}, '获取文章内容失败')
  },
  setArticleViews({id}) {
    return request(CQL.SET_ARTICLE_VIEWS, {id}, '更新浏览数失败')
  },
  setArticleComments({id, num}) {
    return request(CQL.SET_ARTICLE_COMMENTS, {id, num}, '更新评论数失败')
  }
}
