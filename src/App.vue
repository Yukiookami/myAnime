<template>
  <div id="app">
<!--    <SlideShow></SlideShow>-->
    <Header id="header"></Header>
<!--    <main id="main">-->
<!--      <router-view/>-->
<!--    </main>-->
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  import SlideShow from './components/SlideShow'
  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      SlideShow
    }
  }
</script>

<style lang="less">
  @import './assets/common.less';

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
</style>
