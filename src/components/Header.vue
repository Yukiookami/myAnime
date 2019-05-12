<template>
  <div class="Header">
    <div class="logo">
      <h2>MyAnime</h2>
      <p>By dantecsm</p>
    </div>
    <div class="nav-wrapper">
      <ul class="nav">
        <li><router-link to="/"><i class="el-icon-s-home">首页</i></router-link></li>
        <li><router-link to="/"><i class="el-icon-notebook-2">动漫目录</i></router-link></li>
        <li><router-link to="/"><i class="el-icon-document">新人导读</i></router-link></li>
        <li><router-link to="/"><i class="el-icon-document">解压必读</i></router-link></li>
        <li><router-link to="/"><i class="el-icon-s-comment">留言板</i></router-link></li>
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
          height: 100%;
          display: flex;
          justify-content: center;
          padding: 0 1.2em;
          min-height: 54px;
          transition: all .2s ease-in-out;
          &:hover {
            background-color: @headerHoverColor;
          }
          a {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
</style>
