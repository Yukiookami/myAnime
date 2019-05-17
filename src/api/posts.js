import request from '@/helpers/request.js'

const CQL = {
  GET_ARTICLE: `select title, views, cover, intro, tags, comments from ArticleDb
      where tags like '{{tag}}' and category like '%{{category}}%' and title like '%{{search}}%'
      limit {{page}}, 8 order by createdAt`,
  GET_ARTICLE_NEWEST: "select title, views from ArticleDb limit 8 order by updatedAt desc"
}

// 这里 tags 默认为 %% 是为了在无 tags 时匹配全部
export default {
  getArticles({tag='%%', category='', search='', page=1} = {tags: '%%', category: '', search: '', page: 1}) {
    return request(CQL.GET_ARTICLE, {tag, category, search, page: page-1}, '获取文章列表失败')
  },
  getNewestArticles() {
    return request(CQL.GET_ARTICLE_NEWEST)
  }
}
