<template>
  <div class="Index">
    <section class="content-wrapper">
      <div class="posts-wrapper">
        <Posts></Posts>
      </div>
    </section>
    <section class="sub-wrapper">
      <Besider></Besider>
    </section>
  </div>
</template>

<script>
  import Besider from '../../components/Besider'
  import Posts from '../../components/Posts'

  export default {
    name: 'Index',
    components: {Besider, Posts}
  }
</script>

<style scoped lang="less">
  @import '../../assets/base.less';

  .Index {
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
