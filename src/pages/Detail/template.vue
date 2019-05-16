<template>
  <div class="Detail">
    <section class="content-wrapper">
      <div class="breadcrumb-wrapper">
        <BreadCrumb></BreadCrumb>
      </div>
      <div class="posts-wrapper">
        <Article></Article>
      </div>
      <div class="comments-wrapper">
        <Comments></Comments>
      </div>
    </section>
    <section class="sub-wrapper">
      <besider></besider>
    </section>
  </div>
</template>

<script>
  import Besider from '../../components/Besider'
  import BreadCrumb from '../../components/BreadCrumb'
  import Comments from '../../components/Comments'
  import Article from '../../components/Article'

  export default {
    name: 'Detail',
    components: {Besider, BreadCrumb, Comments, Article}
  }
</script>

<style scoped lang="less">
  @import '../../assets/base.less';

  .Detail {
    display: flex;

    section.content-wrapper {
      flex: 2;
      padding: 0 15px;
    }

    section.sub-wrapper {
      flex: 1;
      padding: 0 15px;
    }

  }
</style>
