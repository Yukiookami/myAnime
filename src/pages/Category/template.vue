<template>
  <div class="Category">
    <section class="content-wrapper">
      <div class="breadcrumb-wrapper">
        <BreadCrumb></BreadCrumb>
      </div>
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
  import BreadCrumb from '../../components/BreadCrumb'
  import Posts from '../../components/Posts'

  export default {
    name: 'Category',
    components: {Besider, BreadCrumb, Posts}
  }
</script>

<style scoped lang="less"></style>
