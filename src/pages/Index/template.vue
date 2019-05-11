<template>
  <div class="Index">
    <section class="content-wrapper">
      <div class="breadcrumb-wrapper">
        <i class="el-icon-s-home"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item id="all">所有动漫</el-breadcrumb-item>
          <el-breadcrumb-item>拼音首字母1~9</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="posts-wrapper">
        <ul>
          <li>
            <div class="post-item">
              <h1 class="title">1/2 summer</h1>
              <ul class="tags">
                <li class="tag"><i class="el-icon-collection-tag"></i>ALcotHoneyCome,纯爱</li>
                <li class="tag"><i class="el-icon-view"></i>47,466℃</li>
                <li class="tag"><i class="el-icon-s-comment"></i>36</li>
              </ul>
              <div class="poster-wrapper">
                <figure class="poster">
                  <img src="../../assets/image/2.jpg">
                  <figcaption>
                    游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介
                  </figcaption>
                </figure>
              </div>
              <div class="date">5月<b>29</b></div>
            </div>
          </li>
          <li>
            <div class="post-item">
              <h1 class="title">1/2 summer</h1>
              <ul class="tags">
                <li class="tag"><i class="el-icon-collection-tag"></i>ALcotHoneyCome,纯爱</li>
                <li class="tag"><i class="el-icon-view"></i>47,466℃</li>
                <li class="tag"><i class="el-icon-s-comment"></i>36</li>
              </ul>
              <div class="poster-wrapper">
                <figure class="poster">
                  <img src="../../assets/image/2.jpg">
                  <figcaption>
                    游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介
                  </figcaption>
                </figure>
              </div>
              <div class="date">5月<b>29</b></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="sub-wrapper"></section>
  </div>
</template>

<script>
  export default {
    name: "Index"
  }
</script>

<style scoped lang="less">
  @import '../../assets/base.less';

  .Index {
    display: flex;

    section.content-wrapper {
      flex: 2;
      padding: 0 15px;

      .breadcrumb-wrapper {
        display: flex;
        align-items: center;
        background-color: @paneColor;
        box-shadow: 0 0 5px #c2c2c2;
        margin-bottom: 40px;
        border-radius: 4px;

        i {
          font-size: 12px;
          padding: 1em .5em;
        }

        .el-breadcrumb {
          padding: 8px 15px;
          font-size: 12px;
          color: rgb(61, 68, 80);

          #all {
            color: rgb(210, 50, 45);
          }
        }
      }

      .posts-wrapper {
        li {
          .post-item {
            position: relative;
            padding: 20px;
            margin-bottom: 30px;
            background-color: rgba(230, 238, 232, .5);
            box-shadow: 0px 0px 8px #000;
            text-align: center;
            transition: all .4s;
            transition-timing-function: cubic-bezier(.175, .885, .32, .1.275);
            border-radius: 10px;

            &:hover {
              box-shadow: 0px 0px 50px #000;
            }

            .title {
              color: #fff;
              background: #1ec7e6;
              display: inline-block;
              font: 28px '微软雅黑', Verdana, Arial, Helvetica, sans-serif;
              padding: 2px;
              margin: 2px auto;
              opacity: .8;
              line-height: 1.5;
            }

            .tags {
              margin: 20px 0;

              .tag {
                display: inline-block;
                margin: 0 .15em;
                padding: .2em .6em.3em;
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

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }

              figcaption {
                position: absolute;
                left: 0;
                top: 0;
                opacity: .1;
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
      }
    }

    section.sub-wrapper {
      flex: 1;
      padding: 0 15px;
    }
  }
</style>
