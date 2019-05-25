import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

const CQL = "select url from SlideShow where seq = p1 or seq = p2 or seq = p3 or seq = p4 or seq = p5 or seq = p6"

export default {
  fetchImage() {
    return new Promise(async (resolve, reject) => {
      try {
        var count = await getRecordCount()
        var randArr = generateRandArr(count, 6)
        var urlArr = await fetchRandomRecord(randArr)

        console.log(urlArr)

        resolve(urlArr)
      } catch(e) {
        Message.error('背景图似乎出了点问题')
        reject(e)
      }
    })
  }
}

async function getRecordCount() {
  return new Promise((resolve, reject) => {
    var cql = "select count(*) from SlideShow"

    AV.Query.doCloudQuery(cql).then(res => {
      resolve(res.count)
    }).catch(err => {
      reject(err)
    })
  })
}

async function fetchRandomRecord(randArr) {
  return new Promise((resolve, reject) => {
    var cql = CQL

    randArr.forEach(seq => {
      cql = cql.replace(/p\d/, seq)
    })

    AV.Query.doCloudQuery(cql).then(res => {
      var {results} = res
      var urlArr = results.map(r => r.attributes.url)

      resolve(urlArr)
    })
  })
}

function generateRandArr(count, length=6) {
  var arr = new Array
  for (var i = 0; i < count; i++) {
    arr[i] = i + 1
  }

  return arr.sort(() => 0.5 - Math.random()).splice(0, length)
}
