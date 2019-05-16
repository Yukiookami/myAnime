import request from '@/helpers/request.js'

const CQL = {
  GET_COMMENTS: "select content, include author from CommentsDb where owner=pointer('ArticleDb','{{articleId}}')",
  SET_COMMENTS_NUM: "update ArticleDb set comments = {{commentsNum}} where objectId = '{{articleId}}'",
  ADD_COMMENT: "insert into CommentsDb(owner, author, content) values(pointer('ArticleDb', '{{articleId}}'), pointer('_User', '{{authorId}}'), '{{content}}')"
}

export default {
  getComments({articleId, page = 1} = {page: 1}) {
    return request(CQL.GET_COMMENTS, {articleId, page}, '获取评论列表失败')
  },
  setCommentsNum({articleId, commentsNum}) {
    return request(CQL.SET_COMMENTS_NUM, {articleId, commentsNum}, '更新评论数失败')
  },
  addComment({articleId, authorId, content}) {
    return request(CQL.ADD_COMMENT, {articleId, authorId, content}, '添加评论失败')
  }
}
