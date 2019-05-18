<template>
  <ul class="Posts">
    <template v-if="loading">
      <div class="loading-wrapper">
        <div class="loading">
          加载中
        </div>
      </div>
    </template>
    <template v-if="!loading">
      <li v-for="post in posts" data-aos="flip-up">
        <div class="post-item">
          <div class="title-wrapper">
            <router-link :to="`/detail/${post.id}`"><h1 class="title">{{post.title}}</h1></router-link>
          </div>
          <ul class="tags">
            <li class="tag"><i class="el-icon-collection-tag"></i>{{post.tags.toString()}}</li>
            <li class="tag"><i class="el-icon-view"></i>{{post.views}}</li>
            <li class="tag"><i class="el-icon-s-comment"></i>{{post.comments}}</li>
          </ul>
          <div class="poster-wrapper">
            <router-link tag="figure" to="/detail/1234" class="poster">
              <img :src="post.cover">
              <figcaption>
                <div class="content">{{post.intro}}</div>
              </figcaption>
            </router-link>
          </div>
          <div class="date">{{post.createdAt.getMonth()+1}}月<b>{{post.createdAt.getDate()}}</b></div>
        </div>
      </li>
    </template>
    <li class="pagination-wrapper">
      <el-pagination
        background layout="pager"
        :page-size="8" :total="total"
        :current-page="page" @current-change="onPageChange"
        :hide-on-single-page="true" v-if="!loading"
      >
      </el-pagination>
    </li>
  </ul>
</template>

<script>
  import posts from '@/api/posts'

  export default {
    name: "Posts",
    data() {
      return {
        page: 1,
        total: 0,
        posts: [],
        loading: true
      }
    },
    watch: {
      '$route'(to, from) {
        this.getPosts()
      }
    },
    created() {
      this.page = parseInt(this.$route.query.page) || 1
      this.getPosts()
    },
    methods: {
      getPosts() {
        this.loading = true
        let params = {page: this.page}
        let {tagName, categoryName, keyword} = this.$route.params

        params['tag'] = tagName === undefined? '%%': decodeURIComponent(tagName)
        params['category'] = categoryName === undefined? '': decodeURIComponent(categoryName)
        params['search'] = keyword === undefined? '': decodeURIComponent(keyword)

        posts.getArticles(params).then(res => {
          this.posts = res.results.map(r => {
            return {id: r.id, createdAt: r.createdAt, ...r.attributes}
          })
          this.loading = false
        })

        this.getPostsTotal(params)
      },
      getPostsTotal(params) {
        posts.getArticlesTotal(params).then(res => {
          this.total = res.count
        })
      },
      onPageChange(page) {
        this.page = page
        this.getPosts()
        this.$router.push({query: {page}})
      }
    }
  }
</script>

<style lang="less">
  .Posts .pagination-wrapper {
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
  .Posts {
    li {
      .post-item {
        position: relative;
        padding: 20px;
        margin-bottom: 30px;
        background-color: rgba(230, 238, 232, .5);
        box-shadow: 0px 0px 8px #000;
        text-align: center;
        transition-timing-function: cubic-bezier(.175, .885, .32, .1 .275);
        border-radius: 10px;

        &:hover {
          transition: all .35s ease-in-out;
          box-shadow: 0px 0px 50px #000;
        }

        .title-wrapper {
          text-align: center;

          .title {
            color: #fff;
            background: #1ec7e6;
            user-select: none;
            display: inline-block;
            font: 28px '微软雅黑', Verdana, Arial, Helvetica, sans-serif;
            padding: 2px;
            margin: 2px auto;
            opacity: .8;
            line-height: 1.5;
            border-radius: 5px;

            &:hover {
              opacity: 1;
              background-color: rgba(0, 0, 0, 0);
              animation: neno 1.5s ease-in-out infinite alternate;
            }

            @keyframes neno {
              0% {
                text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
              }
              100% {
                text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
              }
            }
          }
        }

        .tags {
          margin: 20px 0;
          text-align: center;

          .tag {
            display: inline-block;
            margin: 0 .15em;
            padding: .2em .6em .3em;
            border-radius: .25em;
            line-height: 1;
            color: #fff;
            font-size: 13px;
            font-weight: bold;
            background-color: rgba(10, 10, 0, .7);

            i {
              margin-right: .15em;
            }
          }
        }

        .poster-wrapper {
          padding: 15px;
          border: 1px solid transparent;
          border-radius: 10px;
          box-shadow: 0 0 8px #000;

          &:hover {
            box-shadow: 0 0 50px #000;
          }
        }

        .poster {
          position: relative;
          width: 680px;
          height: 382px;
          overflow: hidden;
          cursor: pointer;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          figcaption {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            padding: 20px;
            font-style: italic;
            font-size: 25px;
            color: #bbb;
            text-align: center;
            overflow: hidden;
            background-color: rgba(0, 0, 0, .6);
            transition: all .35s linear .3s;
            opacity: 0;
            transform: scale(4);

            .content {
              display: -webkit-box;
              -webkit-line-clamp: 10;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          }

          &:hover img {
            transform: scale(1.2);
            transition: all .4s linear;
          }

          &:hover figcaption {
            opacity: 1;
            transform: scale(1);
          }
        }

        .date {
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: rgb(107, 105, 214);
          left: -20px;
          top: -20px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 13px;

          b {
            display: block;
            font-size: 30px;
          }
        }
      }
    }
    .pagination-wrapper {
      text-align: right;
    }
    .loading-wrapper {
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;

      .loading {
        width: 100px;
        height: 100px;
        color: #333;
        font-size: 12px;
        user-select: none;
        line-height: 100px;
        margin: 100px auto;
        position: relative;
        box-sizing: border-box;
        text-align: center;
        z-index: 0;
        text-transform: uppercase;
      }

      .loading:before,
      .loading:after {
        opacity: 0;
        box-sizing: border-box;
        content: "\0020";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        border: 5px solid #fff;
        box-shadow: 0 0 50px #fff, inset 0 0 50px #fff;
      }

      .loading:after {
        z-index: 1;
        -webkit-animation: gogoloader 2s infinite 1s;
      }

      .loading:before {
        z-index: 2;
        -webkit-animation: gogoloader 2s infinite;
      }

      @-webkit-keyframes gogoloader {
        0% {
          -webkit-transform: scale(0);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          -webkit-transform: scale(1);
          opacity: 0;
        }
      }
    }
  }
</style>
