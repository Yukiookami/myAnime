<template>
  <div class="Besider">
    <aside>
      <div class="input-wrapper" data-aos="flip-up" data-aos-mirror="true" data-aos-delay="100">
        <div class="input">
          <el-input class="searchInput" v-model="searchText" placeholder="输入关键词搜索"></el-input>
          <router-link :disabled="searchText===''" tag="el-button" :to="`/search/${searchText}`" class="searchConfirm"><i class="el-icon-search"></i></router-link>
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
          <h3>请登录</h3>
          <div class="btnGroup">
            <router-link tag="el-button" to="/login">登录</router-link>
            <router-link tag="el-button" to="/register">注册</router-link>
          </div>
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
            <li class="listGroupItem">
              <img src="../assets/image/avatar.jpg">
              <span class="commentLog"> 第一句话 </span>
            </li>
            <li class="listGroupItem">
              <span class="avatar">
                <img src="../assets/image/avatar.jpg">
              </span>
              <span class="commentLog"> 第二句话 </span>
            </li>
            <li class="listGroupItem">
              <img src="../assets/image/avatar.jpg">
              <span class="commentLog"> 第三句话 </span>
            </li>
            <li class="listGroupItem">
              <span class="avatar">
                <img src="../assets/image/avatar.jpg">
              </span>
              <span class="commentLog"> 第四句话 </span>
            </li>
            <li class="listGroupItem">
              <img src="../assets/image/avatar.jpg">
              <span class="commentLog"> 第五句话 </span>
            </li>
            <li class="listGroupItem">
              <span class="avatar">
                <img src="../assets/image/avatar.jpg">
              </span>
              <span class="commentLog"> 第六句话 </span>
            </li>
            <li class="listGroupItem">
              <img src="../assets/image/avatar.jpg">
              <span class="commentLog"> 第七句话 </span>
            </li>
            <li class="listGroupItem">
              <span class="avatar">
                <img src="../assets/image/avatar.jpg">
              </span>
              <span class="commentLog"> 第八句话 </span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <aside>
      <div class="floatPanel randomList" data-aos="fade-up" data-aos-mirror="true" data-aos-duration="2000">
        <div class="panelHeading">
          <i class="el-icon-menu"></i>
          <span>随机文章</span>
          <i class="el-icon-arrow-up"></i>
          <i class="el-icon-error"></i>
        </div>
        <div class="panelContent">
          <ul class="listGroup">
            <li class="listGroupItem">
              <span class="title">Flowers 春篇</span>
              <span class="tag"> 59941 ℃ </span>
            </li>
            <li class="listGroupItem">
              <span class="title">黄雷的伽克苏恩~何等闪耀的勇气~</span>
              <span class="tag"> 17426 ℃ </span>
            </li>
            <li class="listGroupItem">
              <span class="title">千金逼我嫁</span>
              <span class="tag"> 24226 ℃ </span>
            </li>
            <li class="listGroupItem">
              <span class="title">关于唯一能让笨蛋妹妹变聪明的方法只有我去</span>
              <span class="tag"> 228416 ℃ </span>
            </li>
            <li class="listGroupItem">
              <span class="title">CARNIVAL</span>
              <span class="tag"> 14371 ℃ </span>
            </li>
            <li class="listGroupItem">
              <span class="title">航迹云的彼方</span>
              <span class="tag"> 29505 ℃ </span>
            </li>
            <li class="listGroupItem">
              <span class="title">兄妹秘哀~口嫌体正直~</span>
              <span class="tag"> 59413 ℃ </span>
            </li>
            <li class="listGroupItem">
              <span class="title">D.C.II~featurning Yun2~(初音岛2 featurning Yun2)</span>
              <span class="tag"> 8118 ℃ </span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
  export default {
    name: "Besider",
    data() {
      return {
        searchText: ''
      }
    }
  }
</script>

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

          .searchInput {
            height: 35px;
            line-height: 35px;
            box-shadow: inset 0px 1px 1px rgba(0, 0, 0, .075);
          }

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
