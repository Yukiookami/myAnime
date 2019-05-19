<template>
  <div class="Footer">
    <a href="javascript:;">© 2019 dantecsm .powered by dantecsm. | 站点地图</a>
    <a class="scrollToTop" :class="{active}" href="#"><el-icon class="el-icon-arrow-up"></el-icon></a>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        active: false
      }
    },
    created() {
      document.addEventListener('scroll', () => {
        this.active = document.documentElement.scrollTop >= 1000
      })
    }
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
    position: fixed;
    font-size: 20px;
    display: flex;
    opacity: 0;
    justify-content: center;
    align-items: center;
    background: rgba(10, 10, 0, .4);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    right: 30px;
    bottom: 30px;
    transition: all .3s ease-in-out;

    @media screen and (max-width: 1280px) {
      transform: scale(.75);
      right: 15px;
      bottom: 15px;
    }

    i {
      transition: all .3s ease-in-out;
    }
    &.active {
      opacity: 1;
    }
    &:hover {
      background: rgba(10, 10, 0, .8);
      i {
        transform: translateY(-5px);
      }
    }
  }
</style>
