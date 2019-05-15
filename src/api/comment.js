import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

export default {
  register({username, password, email=''} = {email: ''}) {
    const user = new AV.User()

    user.setUsername(username)
    user.setPassword(password)
    email && user.setEmail(email)

    return new Promise((resolve, reject) => {
      user.signUp().then(res => {
        Message.success('注册成功')
        resolve(res)
      }, err => {
        let msg = '未能成功获取评论'
        Message.error(msg)
        reject(err)
      })
    })
  },

  login({username, password}) {
    return new Promise((resolve, reject) => {
      AV.User.logIn(username, password).then(res => {
        Message.success('登录成功')
        resolve(res)
      }, err => {
        let msg = '未能成功获取评论'
        Message.error(msg)
        reject(err)
      })
    })
  },

  logout() {
    return AV.User.logOut()
  },

  getInfo() {
    let currentUser = AV.User.current()
    if(!currentUser) {
      return {user: null, isLogin: false}
    } else {
      return {user: currentUser.attributes.username, isLogin: true}
    }
  }
}
