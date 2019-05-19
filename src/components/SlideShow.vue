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
  import p1 from '@/assets/image/1.jpg'
  import p2 from '@/assets/image/2.jpg'
  import p3 from '@/assets/image/3.jpg'
  import p4 from '@/assets/image/4.jpg'
  import p5 from '@/assets/image/5.jpg'
  import p6 from '@/assets/image/6.jpg'

  export default {
    name: "SlideShow",
    data() {
      return {
        imageArr: [p1, p2, p3, p4, p5, p6]
      }
    },
    created() {
      let then = +new Date
      slides.fetchImage().then(urlArr => {
        let now = +new Date
        let timeout = (60000 - (now - then)) % 6000

        setTimeout(() => {
          console.log('网络壁纸加载完毕')
          this.imageArr = urlArr
        }, timeout)
      })
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
