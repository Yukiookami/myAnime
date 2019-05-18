<template>
  <div class="Footer">
    <a href="javascript:;">© 2019 dantecsm .powered by dantecsm. | 站点地图</a>
    <a class="scrollToTop" href="#"><el-icon class="el-icon-arrow-up"></el-icon></a>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="less">
  @import '../assets/base.less';

  .Footer {
    position: relative;
    padding: 50px;
    text-align: center;
    margin-top: auto;
    color: #eee;
    font-size: 12px;
  }
  .scrollToTop {
    position: absolute;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: @themeColor;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);
    transition: all .3s ease-in-out;
    i {
      transition: all .3s ease-in-out;
    }
    &:hover {
      background: rgba(10, 10, 0, .9);
      i {
        transform: translateY(-5px);
      }
    }
  }
</style>
