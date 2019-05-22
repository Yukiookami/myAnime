import request from '@/helpers/request.js'

// 这里 SET_COMMENTS_NUM 是自增操作

const CQL = {
  GET_COMMENTS: "select content, include author from CommentsDb where owner=pointer('ArticleDb','{{articleId}}') limit {{page}}, 8 order by createdAt desc",
  SET_COMMENTS_NUM: "update ArticleDb set comments = {{num}} where objectId = '{{articleId}}'",
  ADD_COMMENT: "insert into CommentsDb(owner, author, content) values(pointer('ArticleDb', '{{articleId}}'), pointer('_User', '{{authorId}}'), '{{content}}')",
  GET_COMMENT_NEWEST: "select content, include author, include owner from CommentsDb limit 8 order by createdAt desc",
  GET_COMMENTS_TOTAL: "select count(*) from CommentsDb where owner=pointer('ArticleDb','{{articleId}}')"
}

export default {
  getComments({articleId, page = 1} = {page: 1}) {
    page = (page - 1) * 8
    return request(CQL.GET_COMMENTS, {articleId, page}, '获取评论列表失败')
  },
  setCommentsNum({articleId, num}) {
    return request(CQL.SET_COMMENTS_NUM, {articleId, num}, '更新评论数失败')
  },
  addComment({articleId, authorId, content}) {
    return request(CQL.ADD_COMMENT, {articleId, authorId, content}, '添加评论失败')
  },
  getNewestComments() {
    return request(CQL.GET_COMMENT_NEWEST, {}, '获取最新评论失败')
  },
  getCommentsTotal({articleId}) {
    return request(CQL.GET_COMMENTS_TOTAL, {articleId}, '获取评论数失败')
  }
}
