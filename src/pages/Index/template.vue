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

<style scoped lang="less"></style>
