<template>
  <div class="Header">
    <div class="logo">
      <h2>MyAnime</h2>
      <p>By dantecsm</p>
    </div>
    <div class="nav-wrapper">
      <ul class="nav">
        <li><i class="el-icon-s-home">首页</i></li>
        <li><i class="el-icon-notebook-2">动漫目录</i></li>
        <li><i class="el-icon-document">新人导读</i></li>
        <li><i class="el-icon-document">解压必读</i></li>
        <li><i class="el-icon-s-comment">留言板</i></li>
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
          align-items: center;
          padding: 0 2em;
          min-height: 54px;
          transition: all .2s ease-in-out;
          &:hover {
            background-color: @headerHoverColor;
          }
        }
      }
    }
  }
</style>
