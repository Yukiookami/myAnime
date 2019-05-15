<template>
  <div class="Guide">
    <section class="content-wrapper">
      <div class="breadcrumb-wrapper">
        <BreadCrumb></BreadCrumb>
      </div>
      <div class="posts-wrapper">
        <div class="post-item" data-aos="zoom-in" data-aos-duration="500">
          新人说明
        </div>
      </div>
      <div class="comments-wrapper">
        <Comments></Comments>
      </div>
    </section>
    <section class="sub-wrapper">
      <Besider></Besider>
    </section>
  </div>
</template>

<script>
  import Besider from '../../components/Besider'
  import BreadCrumb from '../../components/BreadCrumb'
  import Comments from '../../components/Comments'

  export default {
    name: 'Guide',
    components: {Besider, BreadCrumb, Comments}
  }
</script>

<style scoped lang="less">
  @import '../../assets/base.less';

  .Guide {
    display: flex;

    section.content-wrapper {
      flex: 2;
      padding: 0 15px;

      .posts-wrapper {
        .post-item {
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

          blockquote {
            border-color: rgb(0, 191, 255);
            background-color: rgba(255, 255, 255, .51);
            padding: 10px 20px;
            margin: 0 0 20px;
            border-left: 5px solid rgb(0, 191, 255);
            text-align: left;
            font-size: 12pt;
            font-weight: 800;
            color: #6699FF;
          }

          .article {
            background-color: #dff0d8;
            color: #468847;
            font-size: 12px;
            padding: 1em 1.5em;
            border-radius: 4px;
          }

          .screenshot {
            img {
              width: 650px;

              &:hover {
                transition: all .3s ease-in-out;
                transform: scale(1.5);
                cursor: zoom-in;
              }
            }
          }

          .share {
            margin-bottom: 20px;
            border-right: 4px;
            background-color: rgba(230, 238, 232, .5);
            border-radius: 4px;
            overflow: hidden;

            header {
              background-color: #428bca;
              color: #fff;
              font-size: 14px;
              line-height: 14px;
              padding: 10px 15px;
            }

            main {
              padding: 15px;

              .el-button {
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
              color: #f00;

              span {
                color: #3d4450;
              }
            }
          }

          .md5 {
            .article {
              color: #3a87ad;
              background-color: rgba(217, 237, 247, .8);
            }
          }

          .blogTag {
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
      }
    }

    section.sub-wrapper {
      flex: 1;
      padding: 0 15px;
    }

  }
</style>
