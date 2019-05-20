<template>
  <div class="BreadCrumb">
    <i class="el-icon-s-home"></i>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="(crumb, idx) in crumbs">
        <el-breadcrumb-item :class="{current: idx===crumbs.length-1}">
          <span @click="queryCategory(idx)">{{crumb}}</span>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
  import article from '@/api/article'

  export default {
    name: "BreadCrumb",
    data() {
      return {
        name: this.$route.name,
        params: this.$route.params,
        crumbs: []
      }
    },
    watch: {
      '$route': {
        handler: function() {
          this.getCrumb()
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      queryCategory(idx) {
        var arr = this.crumbs

        if(idx + 1 === arr.length) return

        var categoryName = arr.splice(0, idx + 1).join('_')

        this.$router.push({name: 'Category', params: {categoryName}})
      },
      getCrumb() {
        this.name = this.$route.name
        this.params = this.$route.params

        switch(this.name) {
          case 'Guide':
            this.crumbs = ['未分类', '关于若干注意事项（新人必读）']
            break
          case 'Unzip':
            this.crumbs = ['未分类', '关于解压的相关说明（解压必读）']
            break
          case 'Tag':
            this.crumbs = [this.params.tagName || '']
            break
          case 'Category':
            this.crumbs = this.params.categoryName.split('_')
            break
          case 'Search':
            this.crumbs = [`搜索 ${this.params.keyword} 的结果` ]
            break
          case 'Detail':
            article.getArticleDetail({id: this.params.blogId}).then(res => {
              res = res.results.map(r => {return {id: r.id, createdAt: r.createdAt, ...r.attributes}})

              let post = res[0]
              if(!post) return

              this.crumbs = post.category.split('_')
            })
            break
          default:
            this.crumbs = []
        }
      }
    }
  }
</script>

<style lang="less">
  .BreadCrumb .el-breadcrumb {
    padding: 8px 15px;
    font-size: 12px;
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        color: rgb(210, 50, 45);
      }
      cursor: url("../assets/cursor/mouse2.png"), url("../assets/cursor/mouse2.png"), auto;
    }

    @media screen and (max-width: 1280px) {
      font-size: 10px;
      line-height: 1.2;
    }

    .el-breadcrumb__item.current {
      .el-breadcrumb__inner {
        color: rgb(61, 68, 80);
      }
      cursor: unset;
    }
  }
</style>

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
  }
</style>
