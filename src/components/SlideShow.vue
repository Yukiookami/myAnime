<template>
  <div class="SlideShow">
    <ul class="cb-slideshow">
      <li v-for="(image,idx) in imageArr">
        <span
          :style="{'background-image': `url(${image})`, 'animation-delay': `${6*idx}s`}"
        >{{idx}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import slides from '@/api/slides.js'

  export default {
    name: "SlideShow",
    data() {
      return {
        imageArr: [
          "https://i.loli.net/2019/05/15/5cdb649d6252723515.jpg",
          "https://i.loli.net/2019/05/15/5cdb64a14851015306.jpg",
          "https://i.loli.net/2019/05/15/5cdb64abb21e378816.jpg",
          "https://i.loli.net/2019/05/15/5cdb64abda9df63268.jpg",
          "https://i.loli.net/2019/05/15/5cdb64b0bf32b21351.jpg",
          "https://i.loli.net/2019/05/15/5cdb64b3737da67385.jpg"
        ]
      }
    },
    created() {
      slides.fetchImage().then(urlArr => {
        this.imageArr = urlArr
      })
    },
    watch: {
      '$route' (to, from) {
        slides.fetchImage().then(urlArr => {
          this.imageArr = urlArr
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .SlideShow {
    .cb-slideshow,
    .cb-slideshow:after {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      z-index: -2;
      list-style: none;
    }

    .cb-slideshow li span {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      color: transparent;
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: none;
      opacity: 0;
      z-index: 0;
      animation: imageAnimation 36s linear infinite 0s;
    }

    /* Animation for the slideshow images */
    @keyframes imageAnimation {
      0% {
        opacity: 0;
        transform: scale(1.10);
        animation-timing-function: ease-in;
      }
      8% {
        opacity: 1;
        transform: scale(1.15);
        animation-timing-function: ease-out;
      }
      17% {
        opacity: 1;
        transform: scale(1.20);
      }
      25% {
        opacity: 0;
        transform: scale(1.25);
      }
      100% {
        opacity: 0
      }
    }
    /* Show at least something when animations not supported */

    .no-cssanimations .cb-slideshow li span {
      opacity: 1;
    }
  }
</style>
