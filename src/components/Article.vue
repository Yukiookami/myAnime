<template>
  <div class="Article" data-aos="fade-up" data-aos-duration="1500">
    <template v-if="loading">
      <div class="loading-wrapper">
        <div class="loading">读取中</div>
      </div>
    </template>
    <template v-if="!loading">
      <section class="title-wrapper">
        <h1 class="title">{{title}}</h1>
      </section>
      <section class="tags-wrapper">
        <li class="tag"><i class="el-icon-date"></i>{{ymd}}</li>
        <li class="tag"><i class="el-icon-view"></i>{{views}}℃</li>
      </section>
      <section class="markdown-wrapper" v-html="markdown"></section>
      <section class="blogTags-wrapper">
        <i class="el-icon-price-tag"></i>
        <template v-for="tag in tags">
          <router-link :to="`/tag/${tag}`" class="tag">{{tag}}</router-link>
        </template>
      </section>
    </template>
  </div>
</template>

<script>
  import article from '@/api/article'
  import marked from 'marked'
  import hs from '@/assets/highslide.js'
  import {postProcessing} from "@/helpers/util"

  window.hs = hs
  const specialArticle = {
    Guide: '5cdd5c106e9ba10068ea7b90',
    Unzip: '5cdd5d537b968a0073db86d8',
    Message: '5cdd5fa830863b0069889f2a'
  }

  export default {
    name: "Article",
    data() {
      return {
        title: '',
        createdAt: '',
        views: '',
        category: '',
        rawContent: '',
        tags: [],
        markdown: '',
        loading: true
      }
    },
    watch: {
      // 按需加载，如果文章 id 相同不重新加载
      '$route': {
        handler: function (newRoute, oldRoute) {
          let newId = this.getId(newRoute)
          let oldId = this.getId(oldRoute)
          if(newId !== oldId) {
            this.getDetail()
          }
        },
        deep: true,
        immediate: true
      }
    },
    computed: {
      id() {
        return this.getId(this.$route)
      },
      ymd() {
        let d = this.createdAt
        if (!d) return '2019-05-12'
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
      }
    },
    created() {
      window.hs.graphicsDir = '/static/graphics/'
    },
    methods: {
      getId(route) {
        if(!route) {
          return ''
        } else if(specialArticle[route.name]) {
          return specialArticle[route.name]
        } else {
          return route.params.blogId
        }
      },
      getDetail() {
        this.loading = true
        article.getArticleDetail({id: this.id}).then(res => {
          this.title = res.title
          this.createdAt = res.createdAt
          this.views = res.views
          this.category = res.category
          this.rawContent = res.rawContent
          this.tags = res.tags
          this.updateMarkdown()
          this.loading = false
        })
      },
      // todo: 改写 marked.js 的语法规则以自适应调整 html
      updateMarkdown() {
        this.markdown = postProcessing(marked(this.rawContent, {breaks: true}))
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../assets/markdown.less';

  .Article {
    position: relative;
    padding: 20px;
    margin-bottom: 30px;
    background-color: rgba(230, 238, 232, .5);
    box-shadow: 0px 0px 8px #000;

    transition-timing-function: cubic-bezier(.175, .885, .32, .1 .275);
    border-radius: 10px;
    z-index: 10;

    &:hover {
      transition: all .2s ease-in-out;
      box-shadow: 0px 0px 50px #000;
    }

    .loading-wrapper {
      height: 500px;
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
        border: 5px solid rgba(10, 10, 0, .7);
        box-shadow: 0 0 50px 5px #fff, inset 0 0 50px 5px #fff;
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

    .title-wrapper {
      text-align: center;

      .title {
        color: #fff;
        background: #1ec7e6;
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

    .tags-wrapper {
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

    .blogTags-wrapper {
      .tag {
        opacity: .7;
        cursor: url("../assets/cursor/mouse2.png"), url("../assets/cursor/mouse2.png"), auto;;
        color: #fff;
        font-size: 14px;
        padding: 2px 6px;
        margin: 0 .5em;

        &:hover {
          opacity: 1;
        }

        &:nth-child(3n+0) {
          background-color: #b85c5c;
        }

        &:nth-child(3n+1) {
          background-color: #5c5cb8;
        }

        &:nth-child(3n+2) {
          background-color: #5cb85c;
        }
      }
    }
  }
</style>
