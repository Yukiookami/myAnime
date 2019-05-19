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
      <section class="detail-wrapper">
        <template v-if="!isSpecialArticle">
          <div class="screenshots">
            <h2>游戏截图</h2>
            <template v-for="screenshot in screenshots">
              <!-- min-height 占位，+ 2 防高度变动 -->
              <a :style="{'min-height': `${deviceWidth < 1280? '50vw': ((screenshot.height || 366 + 2) + 'px')}`}" :href="screenshot.src" class="highslide"
                 onclick="return window.innerWidth < 1280? false: hs.expand(this, hs.galleryOptions)" @click.prevent>
                <img :src="screenshot.src" width="650" :height="`${screenshot.height || 364}px`">
              </a><br>
            </template>
          </div>
          <div class="intro">
            <h2>游戏简介</h2>
            <div class="article lightgreen" v-html="intro"></div>
          </div>
          <div class="staff" v-if="staff">
            <h2>STAFF</h2>
            <div class="article lightgreen" v-html="staff"></div>
          </div>
          <div class="panel">
            <header>百度网盘链接</header>
            <main><a target="blank" :href="shareLink">链接</a></main>
            <footer>
              <div v-for="append in appends">
                <template v-if="append.content">
                  <b>{{append.title}}</b>{{append.content}}
                </template>
              </div>
            </footer>
          </div>
          <div class="article lightblue" v-html="md5" v-if="md5"></div>
        </template>
        <template v-if="isSpecialArticle">
          <div v-html="rawContentParser(rawContent)"></div>
        </template>
      </section>
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
  import specialArticle from '@/assets/specialArticle'

  export default {
    name: "Article",
    data() {
      return {
        id: '',
        title: '',
        createdAt: '',
        views: '',
        category: '',
        tags: [],
        markdown: '',
        screenshots: [],
        intro: '',
        staff: '',
        shareLink: '',
        appends: [],
        md5: '',
        rawContnet: '',
        loading: true,
        deviceWidth: 1366
      }
    },
    watch: {
      // 按需加载，如果文章 id 相同不重新加载
      '$route': {
        handler: function (to, from) {
          let oldId = this.getId(from)
          let newId = this.getId(to)

          if (newId !== oldId) {
            this.id = newId
            this.getDetail()
          }
        },
        deep: true,
        immediate: true
      }
    },
    computed: {
      ymd() {
        let d = this.createdAt
        if (!d) return '2019-05-12'
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
      },
      isSpecialArticle() {
        for (var key in specialArticle) {
          if (specialArticle[key] === this.id) {
            return true
          }
        }
        return false
      }
    },
    created() {
      this.deviceWidth = window.innerWidth
    },
    methods: {
      getId(route) {
        if (!route) {
          return ''
        }

        var isSpecialRoute = ["Guide", "Unzip", "Message"].includes(route.name)
        if (isSpecialRoute) {
          return specialArticle[route.name]
        } else {
          return route.params.blogId
        }
      },
      getDetail() {
        this.loading = true

        article.getArticleDetail({id: this.id}).then(res => {
          res = res.results.map(r => {return {id: r.id, createdAt: r.createdAt, ...r.attributes}})

          let post = res[0]
          if(!post) return

          // 获取正文之外的数据
          this.title = post.title
          this.createdAt = post.createdAt
          this.views = post.views
          this.category = post.category
          this.tags = post.tags

          // 正文数据
          this.screenshots = post.screenshots
          this.intro = post.intro
          this.staff = post.staff
          this.shareLink = post.href
          this.appends = this.process(post.appends || [])
          this.md5 = post.md5
          this.rawContent = post.rawContent

          this.loading = false
        })
      },
      process(appends) {
        return appends.map(append => {
          var group = append.trim().match(/(提取密码.|备注.)*(.*?)$/)
          var title = (group[1] || '').trim()
          var content = (group[2] || '').trim()

          return {title, content}
        })
      },
      rawContentParser(text) {
        text = text.replace(/^## ([\s\S]+?)$([\s\S]+?)(?=(^##|$(?![\r\n])))/gm, '<h2>$1</h2>\n<div class="article">$2\n</div>\n')
        text = text.replace(/\r\n/g, '\n')
        text = text.replace(/^[\s]*\n/gm, '')

        var groups = text.match(/<div class="article">[\s\S]+?<\/div>/g) || []
        var lines = groups.map(t => t.split('\n').length - 2)
        for (var i = 0; i < lines.length; i++) {
          var isMultiple = lines[i] >= 3
          var replacement = isMultiple ? 'class="article lightgreen"' : 'class="article lightblue"'
          text = text.replace(/class="article"/, replacement)
        }
        text = text.replace(/>\n/gm, '>')
        return text
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../assets/base.less';

  .Article {
    position: relative;
    padding: 20px;
    margin-bottom: 30px;
    background-color: rgba(230, 238, 232, .5);
    box-shadow: 0px 0px 8px #000;

    transition-timing-function: cubic-bezier(.175, .885, .32, .1 .275);
    border-radius: 10px;
    z-index: 10;

    @media screen and (max-width: 1280px) {
      padding: 10px;
    }

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

        @media screen and (max-width: 1280px) {
          font-size: 14px;
        }

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

      @media screen and (max-width: 1280px) {
        margin: 10px 0;
      }

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

    /deep/ .detail-wrapper {
      h2 {
        border-color: rgb(0, 191, 255);
        background-color: rgba(255, 255, 255, .51);
        padding: 10px 20px;
        border-left: 5px solid rgb(0, 191, 255);
        text-align: left;
        font-size: 12pt;
        font-weight: 800;
        color: #6699FF;
        margin: 2em 0 .5em 0;

        @media screen and (max-width: 1280px) {
          padding: 5px 10px;
          font-size: 15px;
          margin: 1em 0 .5em 0;
        }
      }

      .screenshots {
        .highslide {
          display: block;
          width: 650px;

          @media screen and (max-width: 1280px) {
            width: 100%;
            min-height: 50vw;
            display: flex;
            justify-content: center;
          }

          img {
            display: block;
            object-fit: cover;
            @media screen and (max-width: 1280px) {
              width: 75vw;
              height: 50vw;
            }

            &:hover {
              transition: all .3s ease-in-out;
              transform: scale(1.5);
              cursor: url("../assets/cursor/zoomin.png"), url("../assets/cursor/zoomin.png"), auto;
              z-index: 100;
            }
          }
        }
      }

      .article {
        background-color: #dff0d8;
        color: #468847;
        font-size: 14px;
        padding: 1em 1.5em;
        border-radius: 4px;
        margin: .5em 0em 1.5em 0;
        white-space: pre-wrap;

        &.lightgreen {
          background-color: #dff0d8;
          color: #468847;
        }

        &.lightblue {
          color: #3a87ad;
          background-color: rgba(217, 237, 247, .8);
        }
      }

      .panel {
        margin: 1.5em 0em;
        border-right: 4px;
        background-color: rgba(230, 238, 232, .5);
        border-radius: 4px;
        overflow: hidden;

        &:hover {
          box-shadow: 0 0 50px rgb(0, 0, 0);
        }

        header {
          background-color: #428bca;
          color: #fff;
          font-size: 14px;
          line-height: 14px;
          padding: 10px 15px;

          @media screen and (max-width: 1280px) {
            font-size: 12px;
            line-height: 1.2;
            padding: 5px 7px;
          }
        }

        main {
          padding: 15px;

          a {
            background-color: #d9534f;
            border: none;
            transition: all .25s ease-in-out;
            color: #fff;
            font-size: 12px;
            padding: 6px 12px;
            line-height: 1.5;
            border-radius: 4px;

            &:hover {
              background-color: #d2322d;
            }
          }
        }

        footer {
          background-color: #fff;
          padding: 10px 15px;
          font-size: 10pt;
          font-weight: bold;
          white-space: pre-line;
          color: #f00;

          @media screen and (max-width: 1280px) {
            font-size: 12px;
          }

          b {
            color: #3d4450;
          }
        }
      }
    }

    .blogTags-wrapper {
      .tag {
        opacity: .7;
        cursor: url("../assets/cursor/mouse2.png"), url("../assets/cursor/mouse2.png"), auto;
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
