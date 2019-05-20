<template>
  <div class="Besider">
    <aside class="search-wrapper">
      <div class="input-wrapper" data-aos="flip-up" data-aos-mirror="true" data-aos-delay="100">
        <div class="input">
          <el-input class="searchInput" v-model="searchText" placeholder="输入关键词搜索" @keyup.enter.native="search"></el-input>
          <router-link :disabled="searchText.trim()===''" tag="el-button" :to="`/search/${encodeURIComponent(searchText.trim())}`" class="searchConfirm"><i class="el-icon-search"></i></router-link>
        </div>
      </div>
    </aside>
    <aside class="userInfo-wrapper" data-aos="flip-left" data-aos-mirror="true" data-aos-delay="200">
      <div class="floatPanel userInfo" :class="{fold: this.isFoldUserInfo, close: this.isCloseUserInfo}">
        <div class="panelHeading">
          <i class="el-icon-user"></i>
          <span>个人中心</span>
          <i :class="isFoldUserInfo? 'el-icon-arrow-down':'el-icon-arrow-up'" @click="foldPane('userInfo')"></i>
          <i class="el-icon-close" @click="closePane('userInfo')"></i>
        </div>
        <div class="panelContent">
          <template v-if="!isLogin">
            <h3>请登录</h3>
            <div class="btnGroup">
              <router-link tag="el-button" to="/login">登录</router-link>
              <router-link tag="el-button" to="/register">注册</router-link>
            </div>
          </template>
          <template v-else>
            <div v-if="isShowAvatar" class="avatar-wrapper">
              <Avatar></Avatar>
            </div>
            <h3>你好, {{user}}</h3>
            <div class="btnGroup">
              <el-button>个人</el-button>
              <el-button @click="logout">登出</el-button>
            </div>
          </template>
        </div>
      </div>
    </aside>
    <aside class="commentList-wrapper" data-aos="fade-up" data-aos-mirror="true" data-aos-delay="200" data-aos-duration="1000">
      <div class="floatPanel commentList" :class="{fold: this.isFoldCommentList, close: this.isCloseCommentList}">
        <div class="panelHeading">
          <i class="el-icon-s-comment"></i>
          <span>最新评论</span>
          <i :class="isFoldCommentList? 'el-icon-arrow-down':'el-icon-arrow-up'" @click="foldPane('commentList')"></i>
          <i class="el-icon-close" @click="closePane('commentList')"></i>
        </div>
        <div class="panelContent">
          <ul class="listGroup">
            <template v-for="comment in comments">
              <router-link tag="li" :to="`/detail/${comment.articleId}#${comment.id}`" class="listGroupItem">
                <img :src="comment.avatar">
                <span class="text commentLog"> {{comment.content}} </span>
              </router-link>
            </template>
          </ul>
        </div>
      </div>
    </aside>
    <aside class="articleList-wrapper" data-aos="fade-up" data-aos-mirror="true" data-aos-duration="1000">
      <div class="floatPanel articleList" :class="{fold: this.isFoldArticleList, close: this.isCloseArticleList}">
        <div class="panelHeading">
          <i class="el-icon-menu"></i>
          <span>随机文章</span>
          <i :class="isFoldArticleList? 'el-icon-arrow-down':'el-icon-arrow-up'" @click="foldPane('articleList')"></i>
          <i class="el-icon-close" @click="closePane('articleList')"></i>
        </div>
        <div class="panelContent">
          <ul class="listGroup">
            <template v-for="post in posts">
              <router-link tag='li' :to="`/detail/${post.id}`" class="listGroupItem">
                <span class="text title">{{post.title}}</span>
                <span class="tag"> {{post.views}} ℃ </span>
              </router-link>
            </template>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import comments from '@/api/comments.js'
  import posts from '@/api/posts.js'
  import {onElementHeightChange} from '@/helpers/util'
  import Avatar from '@/components/Avatar'
  import randomDb from '@/api/randomDb.js'

  const DEFAULT_AVATAR = 'https://i.bmp.ovh/imgs/2019/05/2660bf1d3c6530f7.jpg'

  export default {
    name: "Besider",
    data() {
      return {
        searchText: '',
        comments: [],
        posts: [],
        isShowAvatar: true,
        isFoldUserInfo: false,
        isCloseUserInfo: false,
        isFoldCommentList: false,
        isCloseCommentList: false,
        isFoldArticleList: false,
        isCloseArticleList: false,
      }
    },
    components: {Avatar},
    computed: {
      ...mapGetters(['isLogin', 'user'])
    },
    created() {
      this.checkLogin()
      this.isFoldUserInfo = window.innerWidth < 1280
      this.isFoldCommentList = window.innerWidth < 1280
      this.isFoldArticleList = window.innerWidth < 1280

      comments.getNewestComments().then(res => {
        this.comments = res.results.map(r => {
          let id = r.id
          let articleId = r.get('owner').id
          let avatar = r.get('author').get('avatar')
          avatar = DEFAULT_AVATAR
          let content = r.get('content')

          return {id, articleId, avatar, content}
        })
      })
      randomDb.fetchRandomArticles().then(res => {
        this.posts = res.results.map(r => {
          return {id: r.id, ...r.attributes}
        })
      })
    },
    mounted() {
      onElementHeightChange(document.querySelector('.Besider'), () => {
        AOS.refresh()
      })
    },
    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
      ]),
      search() {
        if(this.searchText.trim() === '') {
          return
        }
        this.$router.push(`/search/${encodeURIComponent(this.searchText.trim())}`)
      },
      foldPane(panel) {
        switch(panel) {
          case "userInfo":
            this.isFoldUserInfo = !this.isFoldUserInfo
            break
          case "commentList":
            this.isFoldCommentList = !this.isFoldCommentList
            break
          case "articleList":
            this.isFoldArticleList = !this.isFoldArticleList
            break
        }
      },
      closePane(panel) {
        switch(panel) {
          case "userInfo":
            this.isCloseUserInfo = true
            break
          case "commentList":
            this.isCloseCommentList = true
            break
          case "articleList":
            this.isCloseArticleList = true
            break
        }
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/base.less';

  .Besider aside {
    .input-wrapper .el-input__inner {
      height: 35px;
      line-height: 35px;
      padding-left: 1em;
      background: transparent;
      box-shadow: inset 0px 1px 1px rgba(0, 0, 0, .075);
      border-color: inherit;

      &:focus {
        background: #fff;
        border-color: inherit;
      }
    }
    .floatPanel .panelHeading {
      .el-icon-arrow-up, .el-icon-arrow-down, .el-icon-close {
        border-radius: 50%;
        padding: 2px;
        &:hover {
          background: @bgActiveRed;
        }
      }
    }
  }
</style>

<style scoped lang="less">
  @import '../assets/base.less';

  .Besider {
    aside {
      margin-bottom: 10px;
      &:first-child {
        margin-bottom: 50px;

        @media screen and (max-width: 1280px) {
          margin-bottom: 25px;
        }
      }

      .input-wrapper {
        border-radius: 4px;

        .input {
          display: flex;
          align-items: center;
          padding: 5px 5px 6px;
          background-color: rgba(0, 0, 10, .7);

          .searchConfirm {
            background-color: @bgActiveRed;
            border: none;
            color: #fff;
            padding: 8px 13px;
            margin-left: 1em;
          }
        }
      }

      .floatPanel {
        border-radius: 4px;
        background-color: @paneColor;
        box-shadow: 0 0 5px #c2c2c2;
        overflow: hidden;
        transition: all .5s ease-in-out;
        margin-bottom: 50px;

        @media screen and (max-width: 1280px) {
          margin-bottom: 25px;
        }

        &:hover {
          box-shadow: 0 0 50px #000;
        }

        &.fold {
          height: 34px;
          margin-bottom: 0;
        }

        &.close {
          display: none;
        }

        .panelHeading {
          color: #fff;
          background-color: @bgDark;
          border-color: #000;
          border-bottom: none;
          font-size: 14px;
          height: 34px;
          padding: 10px 15px;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          display: flex;
          align-items: center;

          i {
            margin-right: .5em;
          }

          i:nth-child(3) {
            margin-left: auto;
          }
        }

        .panelContent {
          .listGroup {
            .listGroupItem {
              padding: 10px 15px;
              border-top: 1px solid #fff;
              transition: all .3s ease-in-out;

              &:first-child {
                border-top-width: 0;
              }

              &:hover {
                background-color: rgba(255, 255, 255, .7);
                box-shadow: 0 0 50px #000;
                .text {
                  color: @bgActiveRed;
                }
              }

              img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid #fff;
                vertical-align: top;
                transition: all .3s ease-in-out;
                object-fit: cover;

                &:hover {
                  transform: scale(1.25);
                }
              }

              .commentLog {
                line-height: 20px;
                background-color: #eee;
                border-color: #eee;
                border-radius: 4px;
                display: inline-block;
                padding: 8px;
                margin-left: 10px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                width: 80%;
                color: #666;
                font-size: 12px;
                cursor: url('../assets/cursor/mouse2.png'), url('../assets/cursor/mouse2.png'), auto;
              }

              .title {
                display: inline-block;
                width: 75%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 12px;
                color: #666;
                line-height: 1.4;
              }

              .tag {
                background-color: @bgActiveRed;
                display: inline-block;
                float: right;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                min-width: 10px;
                padding: 2px 5px;
                font-size: 12px;
                font-weight: bold;
                line-height: 1;
                color: #fff;
                text-align: center;
                border-radius: 10px;
              }
            }
          }
        }
      }

      .floatPanel.userInfo {
        &:hover {
          background-color: rgba(255, 255, 255, .9);
        }

        .panelContent {
          padding-top: 1.5em;

          .avatar-wrapper {
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          h3 {
            text-align: center;
            font-weight: normal;
            font-size: 16px;
            padding: .5em 1.5em 1em;

            @media screen and (max-width: 1280px) {
              font-size: 12px;
            }
          }

          .btnGroup {
            display: flex;
            padding: 1.2em 2em;

            .el-button {
              flex-grow: 1;
              background: @bgDark;
              font-size: 10px;
              color: #fff;
              border: none;
              transition: all .3s ease-in-out;

              &:hover {
                background-color: @bgActiveRed;
              }
            }
          }
        }
      }

      .floatPanel.articleList {
        .listGroupItem {
          background-color: rgba(230, 238, 232, .3);
          cursor: url('../assets/cursor/mouse2.png'), url('../assets/cursor/mouse2.png'), auto;
        }
      }
    }
  }
</style>
