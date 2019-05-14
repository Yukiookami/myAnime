<template>
  <div class="BreadCrumb">
    <i class="el-icon-s-home"></i>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="(crumb, idx) in crumbs">
        <el-breadcrumb-item :class="{current: idx === crumbs.length - 1}">{{crumb}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "BreadCrumb",
    data() {
      return {
        name: this.$route.name,
        params: this.$route.params
      }
    },
    watch: {
      '$route' (to, from) {
        this.name = this.$route.name
        this.params = this.$route.params
      }
    },
    created() {
    },
    computed: {
      crumbs() {
        console.log(this.params)
        if(this.name === 'Guide') {
          return ['未分类', '关于若干注意事项（新人必读）']
        }
        if(this.name === 'Unzip') {
          return ['未分类', '关于解压的相关说明（解压必读）']
        }
        if(this.name === 'Tag') {
          return [this.params.tagName || '']
        }
        if(this.name === 'Category') {
          return this.params.categoryName.split('_')
        }
        if(this.name === 'Detail') {
          return ['Category', '当前文章标题']
        }
        if(this.name === 'Search') {
          return [`搜索 ${this.params.keyword} 的结果` ]
        }
        return []
      }
    }
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

      .current {
        color: rgb(61, 68, 80);
      }
    }
  }
</style>
