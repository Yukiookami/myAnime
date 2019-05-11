<template>
  <div class="SlideShow">
    <ul class="cb-slideshow">
      <li><span>Image 01</span></li>
      <li><span>Image 02</span></li>
      <li><span>Image 03</span></li>
      <li><span>Image 04</span></li>
      <li><span>Image 05</span></li>
      <li><span>Image 06</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SlideShow",
    data() {
      return {
        imageArr: [

        ]
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

    .cb-slideshow li:nth-child(1) span {
      background-image: url('../assets/image/1.jpg')
    }

    .cb-slideshow li:nth-child(2) span {
      background-image: url('../assets/image/2.jpg');
      animation-delay: 6s;
    }

    .cb-slideshow li:nth-child(3) span {
      background-image: url('../assets/image/3.jpg');
      animation-delay: 12s;
    }

    .cb-slideshow li:nth-child(4) span {
      background-image: url('../assets/image/4.jpg');
      animation-delay: 18s;
    }

    .cb-slideshow li:nth-child(5) span {
      background-image: url('../assets/image/5.jpg');
      animation-delay: 24s;
    }

    .cb-slideshow li:nth-child(6) span {
      background-image: url('../assets/image/6.jpg');
      animation-delay: 30s;
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
