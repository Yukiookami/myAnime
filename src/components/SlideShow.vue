<template>
  <div>
    <div class="SlideShow">
      <ul class="cb-slideshow">
        <template v-for="(image,idx) in imageArr">
          <li v-if="image">
            <span :style="{'background-image': `url(${image})`, 'animation-delay': `${6*idx}s`}">{{idx}}</span>
          </li>
        </template>
      </ul>
      <div class="cb-next" v-show="false">
        <template v-for="image in imageNextArr"><img :src="image" alt=""></template>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
import randomDb from '@/api/randomDb.js'
import p1 from '@/assets/image/1.jpg'
import p2 from '@/assets/image/2.jpg'
import p3 from '@/assets/image/3.jpg'
import p4 from '@/assets/image/4.jpg'
import p5 from '@/assets/image/5.jpg'
import p6 from '@/assets/image/6.jpg'
import p7 from '@/assets/image/7.jpg'

export default {
  name: "SlideShow",
  data() {
    return {
      imageArr: [p1, p2, p3, p4, p5, p6, p7],
      imageNextArr: []
    }
  },
  created() {
    randomDb.fetchRandomSlides().then(res => {
      let urlArr = res.results.map(r => r.get('url'))

      this.imageNextArr = urlArr || []

      let idx = -1

      let timer = setInterval(() => {
        if(this.imageNextArr.length === 0) {
          setTimeout(() => {
            this.imageArr.pop()
          }, 6000)
          clearInterval(timer)
        }

        if(idx >= 0) {
          this.imageArr[idx] = this.imageNextArr.splice(0, 1)[0] || this.imageArr[idx]
        }

        idx += 1
      }, 6000)
    })
  }
}
</script>

<style scoped lang="less">
  @import '../assets/base.less';

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
@media screen and (max-width: 1280px) {
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(10, 10, 0, .5);
    pointer-events: none;
    z-index: -1;
  }
}
</style>
