<template>
  <div class="My">
    <div class="imagePicker">
      <img src="https://p2.qqyou.com/biaoqing/UploadPic/2014-9/24/2014092417142711336.png" class="image">
      <div class="mask">编辑</div>
      <input class="upload" type="file" name="image" title="点击上传头像" @change="setIcon">
    </div>
  </div>
</template>

<script>
  export default {
    name: "My",
    methods: {
      setIcon(e) {
        let file = e.target.files[0]
        let url = window.URL.createObjectURL(file)
        e.target.parentNode.querySelector('.image').src = url
        e.target.value = ''
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../../assets/base.less';

  .My {
    display: flex;
    justify-content: center;

    .imagePicker {
      width: 60px;
      height: 60px;
      border: 1px solid rgba(255, 255, 255, .5);
      box-shadow: inset 0 0 3px rgba(0, 0, 0, .5);
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      font-size: 12px;

      img {
        max-width: 100%;
        max-height: 100%;
        vertical-align: top;
      }

      .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        color: #fff;
        background-color: rgba(0, 0, 0, .5);
        display: none;
      }

      .upload {
        position: absolute;
        left: -100%;
        top: -100%;
        width: 200%;
        height: 200%;
        cursor: pointer;
        opacity: 0;
      }

      &:hover {
        .mask {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
</style>
