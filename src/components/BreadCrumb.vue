<template>
  <div class="BreadCrumb">
    <i class="el-icon-s-home"></i>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>所有动漫</el-breadcrumb-item>
      <el-breadcrumb-item>拼音首字母1~9</el-breadcrumb-item>
      <el-breadcrumb-item id="current">1/2 summer</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "BreadCrumb"
  }
</script>

<style scoped lang="less">
  @import '../assets/base.less';

  .BreadCrumb {
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
      color: rgb(210, 50, 45);

      #current {
        color: rgb(61, 68, 80);
      }
    }
  }
</style>
