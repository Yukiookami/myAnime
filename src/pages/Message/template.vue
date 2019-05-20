<template>
  <div class="Message">
    <section class="content-wrapper">
      <div class="posts-wrapper">
<!--        <div class="post-item" data-aos="zoom-in-up" data-aos-duration="500">-->
<!--          这是留言板-->
<!--        </div>-->
        <Article></Article>
      </div>
      <div class="comment-wrapper">
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
  import Comments from '../../components/Comments'
  import Article from '../../components/Article'

  export default {
    name: 'Message',
    components: {Besider, Comments, Article}
  }
</script>

<style scoped lang="less"></style>
