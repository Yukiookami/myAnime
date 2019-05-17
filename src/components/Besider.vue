<template>
  <div class="Besider">
    <aside>
      <div class="input-wrapper" data-aos="flip-up" data-aos-mirror="true" data-aos-delay="100">
        <div class="input">
          <el-input class="searchInput" v-model="searchText" placeholder="输入关键词搜索"></el-input>
          <router-link :disabled="searchText===''" tag="el-button" :to="`/search/${encodeURIComponent(searchText)}`" class="searchConfirm"><i class="el-icon-search"></i></router-link>
        </div>
      </div>
    </aside>
    <aside>
      <div class="floatPanel userInfo" data-aos="flip-left" data-aos-mirror="true" data-aos-delay="200">
        <div class="panelHeading">
          <i class="el-icon-user"></i>
          <span>个人中心</span>
          <i class="el-icon-arrow-up"></i>
          <i class="el-icon-error"></i>
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
            <h3>你好, {{user}}</h3>
            <div class="btnGroup">
              <router-link tag="el-button" to="/my">个人</router-link>
              <el-button @click="logout">登出</el-button>
            </div>
          </template>
        </div>
      </div>
    </aside>
    <aside>
      <div class="floatPanel commentList" data-aos="fade-up" data-aos-mirror="true" data-aos-delay="200"
           data-aos-duration="2000">
        <div class="panelHeading">
          <i class="el-icon-s-comment"></i>
          <span>最新评论</span>
          <i class="el-icon-arrow-up"></i>
          <i class="el-icon-error"></i>
        </div>
        <div class="panelContent">
          <ul class="listGroup">
            <template v-for="comment in comments">
              <router-link tag="li" :to="`/detail/${comment.articleId}#${comment.id}`" :id="comment.id" class="listGroupItem">
                <img src="../assets/image/avatar.jpg">
                <span class="commentLog"> {{comment.content}} </span>
              </router-link>
            </template>
          </ul>
        </div>
      </div>
    </aside>
    <aside>
      <div class="floatPanel randomList" data-aos="fade-up" data-aos-mirror="true" data-aos-duration="2000">
        <div class="panelHeading">
          <i class="el-icon-menu"></i>
          <span>最新文章</span>
          <i class="el-icon-arrow-up"></i>
          <i class="el-icon-error"></i>
        </div>
        <div class="panelContent">
          <ul class="listGroup">
            <template v-for="post in posts">
              <router-link tag='li' :to="`/detail/${post.id}`" class="listGroupItem">
                <span class="title">{{post.title}}</span>
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

  export default {
    name: "Besider",
    data() {
      return {
        searchText: '',
        comments: [],
        posts: []
      }
    },
    computed: {
      ...mapGetters(['isLogin', 'user'])
    },
    created() {
      this.checkLogin()
      comments.getNewestComments().then(res => {
        this.comments = res.results.map(r => {
          return {id: r.id, articleId: r.attributes.owner.id, ...r.attributes}
        })
      })
      posts.getNewestArticles().then(res => {
        this.posts = res.results.map(r => {
          return {id: r.id, ...r.attributes}
        })
      })
    },
    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
      ]),
    }
  }
</script>

<style lang="less">
  .Besider aside .input-wrapper .el-input__inner {
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
</style>

<style scoped lang="less">
  .Besider {
    aside {
      margin-bottom: 50px;

      .input-wrapper {
        border-radius: 4px;

        .input {
          display: flex;
          align-items: center;
          padding: 5px 5px 6px;
          background-color: rgba(0, 0, 10, .7);

          .searchConfirm {
            background-color: #d9534f;
            border: none;
            color: #fff;
            padding: 8px 13px;
            margin-left: 1em;
          }
        }
      }

      .floatPanel {
        border-radius: 4px;
        background-color: rgba(230, 238, 232, .5);
        box-shadow: 0 0 5px #c2c2c2;

        &:hover {
          box-shadow: 0 0 50px #000;
          transition: all .5s ease-in-out;
          background-color: rgba(255, 255, 255, .6);
        }

        .panelHeading {
          color: #fff;
          background-color: rgba(10, 10, 0, .7);
          border-color: #000;
          border-bottom: none;
          font-size: 14px;
          line-height: 14px;
          padding: 10px 15px;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          display: flex;

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

              &:first-child {
                border-top-width: 0;
              }

              &:hover {
                transition: all .3s ease-in-out;
                background-color: rgba(255, 255, 255, .7);
                box-shadow: 0 0 50px #000;
              }

              img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid #fff;
                vertical-align: top;
                transition: all .3s ease-in-out;

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
                background-color: #d9534f;
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
          h3 {
            text-align: center;
            font-weight: normal;
            font-size: 16px;
            padding: 1.5em 1.5em 1em;
          }

          .btnGroup {
            display: flex;
            padding: 1.2em 2em;

            .el-button {
              flex-grow: 1;
              background: rgba(10, 10, 0, .7);
              font-size: 2px;
              color: #fff;
              border: none;

              &:hover {
                transition: all .3s ease-in-out;
                background-color: #d9534f;
              }
            }
          }
        }
      }

      .floatPanel.randomList {
        .listGroupItem {
          background-color: rgba(230, 238, 232, .3);
        }
      }
    }
  }
</style>
