<template>
  <div class="Login">
    <div class="form-wrapper" data-aos="flip-right">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="onSubmit">立即登录</el-button>
        </el-form-item>
      </el-form>
      <div class="hint">木有账号？点此<router-link to="/register">注册</router-link></div>
    </div>
  </div>
</template>

<script>
  import auth from '@/api/auth.js'

  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        let {username, password} = this.form
        auth.login({username, password}).then(res => {
          this.$router.push({path: this.$route.query.redirect || '/'})
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .Login {
    .form-wrapper {
      max-width: 500px;
      margin: 20vh auto;
      border-radius: 4px;
      padding: 50px 35px 35px 0;
      display: flex;
      justify-content: center;
      position: relative;
      background-color: rgba(230, 238, 232, .5);
      box-shadow: 0 0 5px #c2c2c2;
      &:hover {
        transition: all .7s ease-in-out;
        background: rgba(255, 255, 255, .9);
      }
      .el-form-item {
        font-weight: bold;
        color: rgb(61, 68, 80);
        .submit {
          margin-left: 40px;
          background-color: rgba(10, 10, 0, .7);
          border: none;
          &:hover {
            background-color: #d9534f;
          }
        }
      }
      .hint {
        position: absolute;
        right: 0;
        bottom: 0;
        color: rgb(61, 68, 80);
        font-size: 12px;
        padding-right: .5em;
        a {
          color: #d9534f;
        }
      }
    }
  }
</style>
