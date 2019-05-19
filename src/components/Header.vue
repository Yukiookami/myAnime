<template>
  <div class="Header" :class="{unfold: !isFold}">
    <div class="topNav">
      <router-link tag="div" to="/" class="logo">
        <h2>MyAnime</h2>
        <p>By dantecsm</p>
      </router-link>
      <div class="nav-trigger" @click="isFold = !isFold"><i class="el-icon-ali-navi"></i></div>
    </div>
    <div class="nav-wrapper">
      <ul class="nav">
        <router-link to="/" tag='li'><i class="el-icon-document">首页</i></router-link>
        <li class='willExpend'>
          <div class="hasChildren deep1">
            <i class="el-icon-star-on">动漫目录</i>
            <ul class="subMenu deep1">
              <router-link tag='li' to="/category/动漫目录_拼音首字母1-9">拼音首字母1-9</router-link>
              <router-link tag='li' to="/category/动漫目录_拼音首字母A-H" class="willExpend">
                <div class="hasChildren deep2">
                  拼音首字母A-H
                  <ul class="subMenu deep2">
                    <router-link tag='li' to="/category/动漫目录_拼音首字母A-H_A">A</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母A-H_B">B</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母A-H_C">C</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母A-H_D">D</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母A-H_E">E</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母A-H_F">F</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母A-H_G">G</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母A-H_H">H</router-link>
                  </ul>
                </div>
              </router-link>
              <router-link tag='li' to="/category/动漫目录_拼音首字母I-P" class="willExpend">
                <div class="hasChildren deep2">
                  &nbsp;拼音首字母I-P&nbsp;
                  <ul class="subMenu deep2">
                    <router-link tag='li' to="/category/动漫目录_拼音首字母I-P_I">I</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母I-P_J">J</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母I-P_K">K</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母I-P_L">L</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母I-P_M">M</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母I-P_N">N</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母I-P_O">O</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母I-P_P">P</router-link>
                  </ul>
                </div>
              </router-link>
              <router-link tag='li' to="/category/动漫目录_拼音首字母Q-Z" class="willExpend">
                <div class="hasChildren deep2">
                  拼音首字母Q-Z
                  <ul class="subMenu deep2">
                    <router-link tag='li' to="/category/动漫目录_拼音首字母Q-Z_Q">Q</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母Q-Z_R">R</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母Q-Z_S">S</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母Q-Z_T">T</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母Q-Z_U">U</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母Q-Z_V">V</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母Q-Z_W">W</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母Q-Z_X">X</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母Q-Z_Y">Y</router-link>
                    <router-link tag='li' to="/category/动漫目录_拼音首字母Q-Z_Z">Z</router-link>
                  </ul>
                </div>
              </router-link>
              <router-link tag='li' to="/category/动漫目录_其他">其他</router-link>
            </ul>
          </div>
        </li>
        <li @click="redirectTo('')"><i class="el-icon-s-promotion">动漫导航</i></li>
        <router-link tag='li' to="/guide"><i class="el-icon-document">新人导读</i></router-link>
        <router-link tag='li' to="/unzip"><i class="el-icon-document">解压必读</i></router-link>
        <router-link tag='li' to="/message"><i class="el-icon-chat-line-square">留言板</i></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isFold: true
    }
  },
  methods: {
    redirectTo(url) {
    	if(url) {
    		window.open(url)
    	}
    }
  }
}
</script>

<style scoped lang="less">
  @import '../assets/base.less';
  @import '../assets/icon.less';

  .Header {
    display: flex;
    padding: 0 110px;
    background-color: @themeColor;
    color: #fff;
    user-select: none;

    @media screen and (max-width: 1280px) {
      position: relative;
      width: 100vw;
      height: 56px;
      justify-content: center;
      transition: all .3s ease-in-out;

      &.unfold {
        height: 380px;

        .nav-wrapper {
          opacity: 1;
        }
      }

      &::before {
        content: '';
        width: 100vw;
        position: absolute;
        height: 1px;
        background-color: #101010;
        top: 56px;
        transition: all .3s ease-in-out;
        transform: translateX(-100%);
      }

      &.unfold::before {
        transform: none;
      }

      .topNav {
        width: 100vw;
        display: flex;
        justify-content: center;
      }
    }

    .logo {
      flex: 0 0 170px;
      padding: 0 15px;
      align-self: center;
      text-align: center;
      cursor: url("../assets/cursor/mouse2.png"), url("../assets/cursor/mouse2.png"), auto;

      @media screen and (max-width: 1280px) {
        align-self: unset;
      }

      h2 {
        font-weight: 100;
        text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #228DFF, 0 0 5px #228DFF, 0 0 6px #228DFF, 0 0 7px #228DFF;
      }
      p {
        font-size: 12px;
      }
    }

    .nav-trigger {
      display: none;

      @media screen and (max-width: 1280px) {
        display: block;
        position: absolute;
        padding: 15px 0;
        right: 1em;
        font-size: 20px !important;
      }
    }

    .nav-wrapper {
      flex: 1;
      padding-left: 20px;
      font-size: 14px;

      @media screen and (max-width: 1280px) {
        transition: all .2s ease-in-out;
        opacity: 0;
        position: absolute;
        overflow: auto;
        padding-left: 0;
        width: 100vw;
        height: 50vh;
        top: 4em;
        left: 0;
      }

      .nav {
        display: flex;
        height: 100%;
        align-items: center;

        @media screen and (max-width: 1280px) {
          flex-direction: column;
        }
        >li {
          min-height: 54px;
        }
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 1.2em;
          transition: all .2s ease-in-out;
          cursor: url("../assets/cursor/mouse2.png"), url("../assets/cursor/mouse2.png"), auto;

          @media screen and (max-width: 1280px) {
            width: 100%;
          }

          &:hover {
            background-color: @headerHoverColor;
          }
        }
        li.willExpend {
          padding: 0 !important;
          .hasChildren {
            padding: 0 1.2em;
          }
        }
        .hasChildren {
          position: relative;
          z-index: 100;
          cursor: url("../assets/cursor/mouse2.png"), url("../assets/cursor/mouse2.png"), auto;
          display: flex;
          align-items: center;
          min-height: 54px;
          &.deep2 {
            min-height: inherit;
            padding: 10px 30px !important;
            &:hover {
              .subMenu.deep2 {
                display: block;
                margin-top: .01px;
              }
            }
          }

          &:hover {
            .subMenu.deep1 {
              display: block;
            }
          }

          .subMenu {
            display: none;
            position: absolute;
            left: 0;
            top: 100%;
            border: 1px solid #fff;
            min-width: 160px;
            padding: 5px 0;
            background-color: rgba(255, 255, 255, .8);
            border: 1px solid rgba(0, 0, 0, .15);
            box-shadow: 0 6px 12px rgba(0, 0, 0, .175);

            @media screen and (max-width: 1280px) {
              display: none !important;
            }

              li {
              padding: 10px 20px;
              color: #333;
              white-space: nowrap;
              &:hover {
                background-color: #d9534f;
                color: #fff;
              }
            }
          }

          .subMenu.deep2 {
            top: 0;
            left: 100%;
          }
        }
      }
    }
  }
</style>
