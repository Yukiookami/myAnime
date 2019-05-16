<template>
  <div class="Article" data-aos="fade-up" data-aos-duration="1500">
    <section class="title-wrapper">
      <h1 class="title">{{title}}</h1>
    </section>
    <section class="tags-wrapper">
      <li class="tag"><i class="el-icon-date"></i>{{ymd}}</li>
      <li class="tag"><i class="el-icon-view"></i>{{views}}℃</li>
    </section>
    <section class="markdown-wrapper" v-html="markdown"></section>
    <!--    sample-->
    <!--    <section class="markdown-wrapper">-->
    <!--      <h2>游戏截图</h2>-->
    <!--      <img src="../assets/image/s1.jpg" alt="">-->
    <!--      <img src="../assets/image/s2.jpg" alt="">-->
    <!--      <img src="../assets/image/s3.jpg" alt="">-->
    <!--      <img src="../assets/image/s4.jpg" alt="">-->
    <!--      <img src="../assets/image/s5.jpg" alt="">-->
    <!--      &nbsp;-->
    <!--      <h2>游戏简介</h2>-->
    <!--      <div class="article lightgreen">-->
    <!--        春日烂漫。于相遇和恋爱中悄然躁动的这个世间。<br>-->
    <!--        对于世间那玫瑰色氛围完全不在意呢。<br>-->
    <!--        今日也一如往常地、在怠惰之路上一往无前的主人公・花咲游真。<br>-->
    <!--        虽然今天也想继续吊儿郎当地度过……<br>-->
    <!--        「欢迎来到幽灵部！从今天开始你就是部长哟」<br>-->
    <!--        聚集了幽灵部员的社团所进行的活动到底是什么玩意。<br>-->
    <!--        明明至今都不知有这么一个社团存在、突然就被任命为部长是在搞什么飞机!?<br>-->
    <!--        「请别在意我。没有和你友好相处的打算」<br>-->
    <!--        在周围制造交流屏障放出冷言冷语的她是、一匹狼的少女・不知火祈（しらぬい いのり）。<br>-->
    <!--        「请让我充分享受快乐吧！新部长♪」<br>-->
    <!--        把我扯入这意义不明的幽灵部的罪魁祸首，以校内最长留级年数自满的玖音彩乃（くおん あやの）说出了毫无责任的话。<br>-->
    <!--        「我喜欢你。从第一次见面起就！感、感到恶心吗？」<br>-->
    <!--        对我一见钟情是怎么回事？突然就告白的这个孩子是琴吹光（ことぶき ひかり）。<br>-->
    <!--        「加入分类委员绝对会很有趣哦。所以来我们这边吧、吶！」<br>-->
    <!--        完全不在意我心情地劝诱我的是、身为恶友的空森若叶（そらもり わかば）。<br>-->
    <!--        不知不觉中已经被包围了、被一群难以应付的女孩子们。<br>-->
    <!--        「这是个好机会啊。你也别总是懒散度日了试试享受青春吧」<br>-->
    <!--        那么会和主人公・花咲游真结缘的到底是……？<br>-->
    <!--        即使无聊透顶、那不可替代的青春物语、如今于此开演！<br>-->
    <!--      </div>-->
    <!--      <h2>汉化STAFF</h2>-->
    <!--      <div class="article lightgreen">-->
    <!--        组长: 邓格拉斯<br>-->
    <!--        副组长: 乾纱凪<br>-->
    <!--        审核: 零白夜<br>-->
    <!--        坑主: 桂雪葉（已跑路）<br>-->
    <!--        程序: dwing<br>-->
    <!--        初翻: 沙罗双树 白云悠悠 蔻蔻 ArieiS 坚果 圣诞老人 沙罗双树 C酱 宁静 言笑 野生萝莉控 宁静<br>-->
    <!--        言笑 麦にオオカミ 老嘞个贱 二次元丶殤 百页 SilentMing 路过某饼 真优 闪耀之风 可能不是花卷<br>-->
    <!--        Croky 纱凪/xdfreedam 雪花 Djakrista 邓格拉斯 御坂小喵 DOGE 二两 KillerQueen 如月酱<br>-->
    <!--        润色: 绵羊的神话 苍蓝钢铁的91 闲云 Jsok MisakiShigure lampy 燹燏 Sora 闲狐兔<br>-->
    <!--        mooninsiderain 绵阳的神话 二次元丶殇 小F 小黑 社长<br>-->
    <!--        校对: SilentMing 炎俱土 星野夏夜 圣诞老人 老嘞个贱 邓格拉斯 xdfreedam 言笑 娜鹿鹿<br>-->
    <!--        晴岚 Doge 沙罗双树 工口组长 毛巾 樱花夏 アリババ Djakrista 来者何人<br>-->
    <!--        二校: 千夜 Jsc6924 梓洋 JC ArieiS 夏露 莫辰 熹 路过某饼<br>-->
    <!--        三校: Jsc6924 千夜 夏露 梓洋 橘子 莫辰 lateP<br>-->
    <!--        美工: 图书管理员酱<br>-->
    <!--        测试: 乾纱凪 ACG-forever！&城彩学园全体成员<br>-->
    <!--        特别感谢: 信子御津<br>-->
    <!--      </div>-->
    <!--      <div class="panel">-->
    <!--        <header>百度网盘链接</header>-->
    <!--        <main>-->
    <!--          <a href="https://pan.baidu.com">链接</a>-->
    <!--        </main>-->
    <!--        <footer>-->
    <!--          <p><span>提取密码：</span>A562</p>-->
    <!--          <p><span>备注：</span>已打BugBug追加剧本「お兄ちゃんとののかのヒミツの保健体育」补丁；已打【城彩学园汉化组】《花咲ワークスプリング！》正式汉化补丁V1.2017.4.10</p>-->
    <!--        </footer>-->
    <!--      </div>-->
    <!--      <div class="article lightblue">-->
    <!--        文件MD5:<br>-->
    <!--        part1 MD5: 445D9866EBAC40B2FA5E3801A5DD6BD7-->
    <!--        part2 MD5: 075616DA4FC30D1CBACE066EFF3CFB31-->
    <!--        part3 MD5: 58EA4C2F52E4454F5E7EBE41A06B55EC-->
    <!--        part4 MD5: 880C8D4B69483164D4755395EA574AE7-->
    <!--        <br>总大小：3.26 GB[rr10%] 解压后：3.52 GB-->
    <!--        <br>任何解压相关问题请看网站顶部解压必读，不看而发问直接小黑屋-->
    <!--      </div>-->
    <!--    </section>-->
    <section class="blogTags-wrapper">
      <i class="el-icon-price-tag"></i>
      <router-link to="/tag/1234">
        <el-tag color="#5cb85c">纯爱</el-tag>
      </router-link>
    </section>
  </div>
</template>

<script>
  import article from '@/api/article'
  import marked from 'marked'

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
        rawContent: ''
      }
    },
    created() {
      let id = this.$route.params.blogId
      if (specialArticle[this.$route.name]) {
        id = specialArticle[this.$route.name]
      }

      article.getArticleDetail({id}).then(res => {
        this.title = res.title
        this.createdAt = res.createdAt
        this.views = res.views
        this.category = res.category
        this.rawContent = res.rawContent
      })
    },
    computed: {
      markdown() {
        return marked(this.rawContent, {breaks: true})
          .replaceAll('<p>', '')
          .replaceAll('</p>', '')
          .replaceAll('-lightgreen-<br>', '<div class="article lightgreen">')
          .replaceAll('-lightblue-<br>', '<div class="article lightblue">')
          .replaceAll('<br>-end-', '</div>')
      },
      ymd() {
        let d = this.createdAt
        if (!d) return '2019-05-12'
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
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
      transition: all .35s ease-in-out;
      box-shadow: 0px 0px 50px #000;
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
      i {
        margin-right: .5em;
      }

      a {
        opacity: .7;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
