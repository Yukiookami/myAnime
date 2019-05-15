import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

const ERRINFO = {
  '200': '未提供用户名或用户名为空',
  '201': '未提供密码或密码为空',
  '202': '用户名已经被占用',
  '203': '邮箱地址已经被占用',
  '204': '未提供邮箱地址',
  '205': '找不到邮箱地址对应的用户',
  '206': '未提供 session, 无法修改用户信息',
  '207': '只能通过注册创建用户',
  '208': '不可绑定其他用户因为第三方账号已经绑定一个用户',
  '210': '用户名和密码不匹配',
  '211': '找不到对应用户',
  '212': '请提供手机号码',
  '213': '手机号码对应的用户不存在',
  '214': '手机号码已经被注册',
  '215': '未验证的手机号码',
  '216': '未验证的邮箱地址',
  '217': '无效用户名(用户名不允许为空)',
  '218': '无效密码(密码不允许为空)',
  '219': '登陆失败次数超过限制请稍候重试',
  '250': '连接的第三方账户未返回用户唯一标识',
  '251': '无效的账户连接'
}

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
        let msg = ERRINFO[err.code] || '未知错误'
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
        let msg = ERRINFO[err.code] || '未知错误'
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
