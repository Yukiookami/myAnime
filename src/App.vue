<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <section class="page">
        <router-view/>
      </section>
      <section class="backgound">
        <SlideShow></SlideShow>
      </section>
    </main>
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
    /*background-color: #000;*/

    #main {
      .page {
        max-width: 1170px;
        margin: auto;
        padding-top: 30px;
        padding-bottom: 30px;
      }
    }
  }
</style>
