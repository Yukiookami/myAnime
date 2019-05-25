<template>
  <div class="Comments">
    <h3 class="commentTitle"><i class="el-icon-s-comment"></i> {{total}} 条评论</h3>
    <div class="commentsLoading" v-if="loading"><i class="el-icon-loading"></i></div>
    <ul class="commentList" v-if="!loading">
      <li v-for="comment in comments"
          :id="comment.id" class="comment-item" data-aos="zoom-out-right">
        <article class="commentBody">
          <footer class="commentMeta">
            <div class="commentAuthor">
              <img :src="comment.avatar" class="avatar">
              <b class="fn">{{comment.author.attributes.username}}</b><span class="says">说道：</span></div>
            <!-- .comment-author -->
            <div class="comment-metadata"><a
              href="https://www.mygalgame.com/huaworkspring.html/comment-page-4/Comments.vue#comment-25696">
              <time>{{comment.createdAt | formatDate}}</time>
            </a></div><!-- .comment-metadata -->
          </footer><!-- .comment-meta -->
          <div class="commentContent"><p>{{comment.content}}</p></div><!-- .comment-content -->
        </article><!-- .comment-body -->
      </li>
    </ul>
    <nav class="commentNav">
      <el-pagination
        background layout="pager"
        :page-size="8" :total="total"
        :current-page="page" @current-change="onPageChange"
        :hide-on-single-page="true"
      >
      </el-pagination>
    </nav>
    <!-- 这里最好改一下样式，改善多行文本输入 -->
    <div class="commentCommit">
      <div class="commentBody">
        <div class="commentMeta"></div>
        <form class="commentContent" @submit.prevent="onSubmit">
          <textarea class="commentText" name="comment" @keydown.enter.prevent="onSubmit">说点什么吧！</textarea>
          <input class="commentConfirm" type="submit" value="发表">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import comments from '@/api/comments.js'
  import article from '@/api/article.js'
  import {mapGetters} from 'vuex'
  import {Message} from 'element-ui'
  import specialArticle from '@/assets/specialArticle'

  const DEFAULT_AVATAR = 'https://i.loli.net/2019/05/25/5ce853819026d92257.jpg'

  export default {
    name: "Comments",
    data() {
      return {
        id: '',
        page: 1,
        total: 0,
        comments: [],
        loading: true
      }
    },
    watch: {
      '$route': {
        handler: function (to, from) {
          this.id = this.getId(to)
          this.getComments()
          this.setTotal()
        },
        deep: true,
        immediate: true
      }
    },
    computed: {
      ...mapGetters(['isLogin', 'userId'])
    },
    methods: {
      getId(route) {
        if(!route) {
          return ''
        }

        var isSpecialRoute = ["Guide", "Unzip", "Message"].includes(route.name)
        if(isSpecialRoute) {
          return specialArticle[route.name]
        } else {
          return  route.params.blogId
        }
      },
      getComments() {
        this.loading = true

        comments.getComments({articleId: this.id, page: this.page}).then(res => {
          this.comments = res.results.map(r => {
            let avatar = r.get('author').get('avatar')
            avatar = (avatar && avatar.url()) || DEFAULT_AVATAR

            return {id: r.id, createdAt: r.createdAt, avatar, ...r.attributes}
          })

          this.loading = false
        })
      },
      setTotal() {
        comments.getCommentsTotal({articleId: this.id}).then(res => {
          this.total = res.count
          // 同时更新 ArticleDb 的 comments 数据和 views 数据
          article.setArticleComments({id: this.id, num: this.total})
          article.setArticleViews({id: this.id})
        })
      },
      onSubmit(e) {
        if (!this.isLogin) {
          Message.error('请登录后再发表评论')
          return
        }

        let authorId = this.userId
        let content = e.currentTarget.querySelector("[name='comment']").value
        comments.addComment({articleId: this.id, authorId, content}).then(res => {
          this.comments.push({
            author: AV.User.current(),
            avatar: AV.User.current().get('avatar').get('url') || DEFAULT_AVATAR,
            content,
            createdAt: new Date()
          })
        })
      },
      onPageChange(cpage) {
        this.page = cpage
        this.getComments()
        this.$router.push({query: {cpage}})
      }
    }
  }
</script>

<style lang="less">
  .Comments .commentNav {
    .el-pagination.is-background .el-pager li:not(.disabled).active,
    .el-pagination.is-background .el-pager li:not(.disabled):hover {
      color: #fff;
      background-color: rgb(217, 83, 79);
    }

    .el-pagination.is-background .el-pager li {
      height: 30px;
      background-color: transparent;
      color: rgb(217, 83, 79);
      font-weight: normal;
      border: 1px solid rgb(217, 83, 79);
    }
  }
</style>

<style scoped lang="less">

  .Comments {
    color: #fff;

    .commentTitle {
      margin: 20px 0;
      padding: 15px;
      text-align: center;
      background-color: rgba(217, 237, 247, .8);
      color: #3a87ad;
      font-size: 14px;
      font-weight: normal;
      border-radius: 4px;
    }

    .commentsLoading {
      text-align: center;
      font-size: 40px;
    }

    .commentList {
      .comment-item {
        font-size: 12px;
        box-shadow: 0 0 8px #000;
        margin: 10px 0;
        transition: all .3s ease-in-out;

        &:hover {
          box-shadow: 0 0 50px #000;

          .commentBody {
            .commentMeta {
              background: #e8f4fa;
            }

            .commentAuthor {
              img.avatar {
                transform: rotate(720deg);
                border-radius: 0;
                object-fit: cover;
              }
            }

            .commentContent {
              background-color: #fff;
            }
          }
        }

        .commentBody {
          position: relative;

          .commentMeta {
            padding-left: 45px;
            padding-right: 10px;
            min-height: 37px;
            line-height: 37px;
            background: rgba(217, 237, 247, .8);
            display: flex;
            justify-content: space-between;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            font-weight: bold;
            color: rgb(61, 68, 80);
            transition: all .3s ease-in-out;

            .says {
              font-weight: normal;
            }

            .commentAuthor {
              .avatar {
                position: absolute;
                background-color: #fff;
                border: 2px solid #fff;
                border-radius: 50%;
                display: block;
                left: -40px;
                top: 10px;
                width: 54px;
                height: 54px;
                object-fit: cover;
                transition: all .4s ease-out;
              }
            }
          }

          .commentContent {
            padding: 20px 55px 40px 45px;
            line-height: 20px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            color: #3d4450;
            background-color: rgba(230, 238, 232, .5);
            transition: all .3s ease-in-out;
          }
        }
      }
    }

    .commentNav {
      text-align: right;
      margin-top: 30px;
    }

    .commentCommit {
      border-radius: 8px;
      opacity: .8;
      overflow: hidden;
      margin-top: 70px;
      transition: all .3s ease-in-out;

      &:hover,&:focus {
        opacity: 1;
        box-shadow: 0 0 50px #000;
      }

      .commentBody {
        position: relative;
        height: 150px;

        .commentMeta {
          height: 40px;
          background: rgb(217, 237, 247);
          color: rgb(61, 68, 80);
        }

        .commentContent {
          color: #3d4450;
          background-color: #fff;

          .commentText {
            position: absolute;
            padding: 20px 55px 40px 45px;
            line-height: 20px;
            color: rgb(61, 68, 80);
            width: 100%;
            height: 120px;
            left: 0;
            top: 37px;
            outline: none;
            font-family: -webkit-body;
            font-size: 12px;
          }

          .commentConfirm {
            position: absolute;
            right: 0;
            bottom: 0;
            outline: none;
            background: rgb(217, 237, 247);
            padding: 10px;
            font-weight: bold;
            border-radius: 8px;
            border: none;
            font-family: -webkit-body;
          }
        }
      }
    }
  }

</style>
