import Vue from 'vue'

Vue.filter('formatDate', function(date) {
  date = new Date(date)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let h = date.getHours()
  let min = date.getMinutes()
  let noon = h <= 11? '上午': '下午'
  h = h >= 12? h - 12: h
  min = min < 10? '0' + min: min
  return `${y}年${m}月${d} ${noon}${h}:${min}`
})
