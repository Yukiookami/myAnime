<template>
  <div class="Comments">
    <h3 class="commentTitle"><i class="el-icon-s-comment"></i> {{comments.length}} 条评论</h3>
    <div class="commentsLoading" v-if="false"><i class="el-icon-loading"></i></div>
    <ul class="commentList">
      <li v-for="comment in comments"
          :id="comment.id" class="comment-item" data-aos="zoom-out-right">
        <article class="commentBody">
          <footer class="commentMeta">
            <div class="commentAuthor">
              <img :src="defaultAvatar" class="avatar">
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
      <el-pagination background layout="pager" :total="35"></el-pagination>
    </nav>
    <!-- 这里最好改一下样式，改善多行文本输入 -->
    <div class="commentCommit">
      <div class="commentBody">
        <div class="commentMeta"></div>
        <form class="commentContent" @submit.prevent="onSubmit">
          <textarea class="commentText" name="comment">说点什么吧！</textarea>
          <input class="commentConfirm" type="submit" value="发表">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import comments from '@/api/comments.js'
  import defaultAvatar from '@/assets/image/avatar.jpg'
  import {mapGetters} from 'vuex'
  import {Message} from 'element-ui'

  const specialArticle = {
    Guide: '5cdd5c106e9ba10068ea7b90',
    Unzip: '5cdd5d537b968a0073db86d8',
    Message: '5cdd5fa830863b0069889f2a'
  }

  export default {
    name: "Comments",
    data() {
      return {
        page: 1,
        comments: [],
        defaultAvatar
      }
    },
    computed: {
      ...mapGetters(['isLogin', 'userId']),
      id() {
        let id = this.$route.params.blogId
        if (specialArticle[this.$route.name]) {
          id = specialArticle[this.$route.name]
        }
        return id
      }
    },
    created() {
      comments.getComments({articleId: this.id, page: this.page}).then(res => {
        this.comments = res.results.map(r => {
          return {id: r.id, createdAt: r.createdAt, ...r.attributes}
        })

        // 这句话应该在发评论的时候调用，在数组 push 之后
        comments.setCommentsNum({articleId: this.id, commentsNum: this.comments.length})
      })
    },
    methods: {
      onSubmit(e) {
        if(!this.isLogin) {
          Message.error('请登录后再发表评论')
          return
        }

        let authorId = this.userId
        let content = e.currentTarget.querySelector("[name='comment']").value
        comments.addComment({articleId: this.id, authorId, content}).then(res => {
          this.comments.push({
            author: AV.User.current(),
            content,
            createdAt: new Date()
          })
          comments.setCommentsNum({articleId: this.id, commentsNum: this.comments.length})
        })
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

    .commentList {
      .comment-item {
        font-size: 12px;
        box-shadow: 0 0 8px #000;
        margin: 10px 0;

        &:hover {
          transition: all .3s ease-in-out;
          box-shadow: 0 0 50px #000;

          .commentBody {
            .commentMeta {
              transition: all .3s ease-in-out;
              background: #e8f4fa;
            }

            .commentAuthor {
              img.avatar {
                transition: all .4s ease-out;
                transform: rotate(720deg);
                border-radius: 0;
              }
            }

            .commentContent {
              transition: all .3s ease-in-out;
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

      &:hover {
        transition: all .3s ease-in-out;
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
