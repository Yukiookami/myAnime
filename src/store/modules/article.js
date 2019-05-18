export default {
  state : {
    articleReady: false,
    commentReady: false
  },
  getters: {
    articleReady: state => state.articleReady,
    commentReady: state => state.commentReady
  },
  mutations: {
    setArticleReady: (state, payload) => {
      state.articleReady = payload.articleReady
    },
    setCommentReady: (state, payload) => {
      state.commentReady = payload.commentReady
    }
  },
  actions: {}
}
