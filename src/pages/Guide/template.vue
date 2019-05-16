<template>
  <div class="Guide">
    <section class="content-wrapper">
      <div class="breadcrumb-wrapper">
        <BreadCrumb></BreadCrumb>
      </div>
      <div class="posts-wrapper">
<!--        <div class="post-item" data-aos="zoom-in" data-aos-duration="500">-->
<!--          新人说明-->
<!--        </div>-->
        <Article></Article>
      </div>
      <div class="comments-wrapper">
        <Comments></Comments>
      </div>
    </section>
    <section class="sub-wrapper">
      <Besider></Besider>
    </section>
  </div>
</template>

<script>
  import Besider from '../../components/Besider'
  import BreadCrumb from '../../components/BreadCrumb'
  import Comments from '../../components/Comments'
  import Article from '../../components/Article'

  export default {
    name: 'Guide',
    components: {Besider, BreadCrumb, Comments, Article}
  }
</script>

<style scoped lang="less">
  @import '../../assets/base.less';

  .Guide {
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
