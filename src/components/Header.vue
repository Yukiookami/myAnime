<template>
  <div class="Header">
    <div class="logo">
      <h2>MyAnime</h2>
      <p>By dantecsm</p>
    </div>
    <div class="nav-wrapper">
      <ul class="nav">
        <li><router-link to="/"><i class="el-icon-document">首页</i></router-link></li>
        <li class='willExpend'>
          <div class="hasChildren deep1">
            <i class="el-icon-star-on">动漫目录</i>
            <ul class="subMenu deep1">
              <li>拼音首字母1-9</li>
              <li class="willExpend">
                <div class="hasChildren deep2">
                  拼音首字母A-H
                  <ul class="subMenu deep2">
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                    <li>G</li>
                    <li>H</li>
                  </ul>
                </div>
              </li>
              <li class="willExpend">
                <div class="hasChildren deep2">
                  拼音首字母I-P
                  <ul class="subMenu deep2">
                    <li>I</li>
                    <li>J</li>
                    <li>K</li>
                    <li>L</li>
                    <li>M</li>
                    <li>N</li>
                    <li>O</li>
                    <li>P</li>
                  </ul>
                </div>
              </li>
              <li class="willExpend">
                <div class="hasChildren deep2">
                  拼音首字母Q-Z
                  <ul class="subMenu deep2">
                    <li>Q</li>
                    <li>R</li>
                    <li>S</li>
                    <li>T</li>
                    <li>U</li>
                    <li>V</li>
                    <li>W</li>
                    <li>X</li>
                    <li>Y</li>
                    <li>Z</li>
                  </ul>
                </div>
              </li>
              <li>其他</li>
            </ul>
          </div>
        </li>
        <li><router-link to="/guide"><i class="el-icon-document">新人导读</i></router-link></li>
        <li><router-link to="/unzip"><i class="el-icon-document">解压必读</i></router-link></li>
        <li><router-link to="/message"><i class="el-icon-s-comment">留言板</i></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="less">
  @import '../assets/base.less';

  .Header {
    display: flex;
    padding: 0 110px;
    background-color: @themeColor;
    color: #fff;
    .logo {
      flex: 0 0 170px;
      padding: 0 15px;
      align-self: center;
      text-align: center;
      h2 {
        font-weight: 100;
        text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #228DFF, 0 0 5px #228DFF, 0 0 6px #228DFF, 0 0 7px #228DFF;
      }
      p {
        font-size: 12px;
      }
    }
    .nav-wrapper {
      flex: 1;
      padding-left: 20px;
      font-size: 14px;
      .nav {
        display: flex;
        height: 100%;
        align-items: center;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 1.2em;
          transition: all .2s ease-in-out;
          &:hover {
            background-color: @headerHoverColor;
          }
          a {
            display: flex;
            align-items: center;
            min-height: 54px;
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
          cursor: pointer;
          display: flex;
          align-items: center;
          min-height: 54px;
          &.deep2 {
            min-height: inherit;
            padding: 15px 32px !important;
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

            li {
              padding: 15px 20px;
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
            margin-top: -15px;
          }
        }
      }
    }
  }
</style>
