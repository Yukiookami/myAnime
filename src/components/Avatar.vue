<template>
  <div class="Avatar">
    <div class="imagePicker" :class="{uploading, uploaded}">
      <img :src="avatarPath" class="image">
      <div class="mask" v-if="!uploading">编辑</div>
      <div class="mask" v-else="uploading">上传中</div>
      <input :disabled = "uploading" class="upload" type="file" name="image" title="点击上传头像" @change="setIcon">
    </div>
  </div>
</template>

<script>
  import auth from '@/api/auth.js'

  const DEFAULT_AVATAR = 'http://wx4.sinaimg.cn/large/0073bI3vly1g3euot0r2tj301i01i0sh.jpg'

  export default {
    name: "Avatar",
    data() {
      return {
        avatarPath: DEFAULT_AVATAR,
        uploading: false
      }
    },
    computed: {
      uploaded() {
        return this.avatarPath !== DEFAULT_AVATAR
      }
    },
    created() {
      let user = AV.User.current()
      if(user) {
        let avatar = user.get('avatar')
        if(avatar) {
          this.avatarPath = avatar.get('url') || DEFAULT_AVATAR
        }
      }
    },
    methods: {
      setIcon(e) {
        let localFile = e.target.files[0]
        let file = new AV.File('avatar.jpg', localFile)

        this.uploading = true
        file.save().then(file => {
          auth.setUserAvatar(file).then(res => {
            this.$message.success('头像上传成功!')
            this.avatarPath = window.URL.createObjectURL(localFile)
            this.uploading = false

          })
        }).catch(err => {
          console.error(err)
          this.$message.error('头像上传失败')
          this.uploading = false
        })

        e.target.value = ''
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../assets/base.less';

  .Avatar {
    .imagePicker {
      width: 60px;
      height: 60px;
      border: 1px solid #fff;
      box-shadow: inset 0 0 3px rgba(0, 0, 0, .5);
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      font-size: 12px;
      transition: all .3s ease-in-out;

      &.uploaded {
        transform: scale(80/60);
      }

      &.uploading {
        transform: rotate(360deg);
        border-radius: 0;
        .mask {
          display: flex;
        }
      }

      &:hover {
        transform: rotate(360deg);
        border-radius: 0;
      }

      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
        object-fit: cover;
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
        justify-content: center;
        align-items: center;
      }

      .upload {
        position: absolute;
        left: -10%;
        top: -10%;
        width: 120%;
        height: 120%;
        cursor: url("../assets/cursor/mouse2.png"), url("../assets/cursor/mouse2.png"), auto;
        opacity: 0;
      }

      &:hover {
        .mask {
          display: flex;
        }
      }
    }
  }
</style>
