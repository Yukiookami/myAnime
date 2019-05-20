import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

export default {
  fetchRandomSlides({count=6} = {count: 6}) {
    return fetchRandomRecords('SlideShow', count, '背景图似乎出了点问题')
  },
  fetchRandomArticles({count=8} = {count: 8}) {
    return fetchRandomRecords('ArticleDb', count, "无法获取随机文章")
  }
}

async function getRecordCount(dbName) {
  return new Promise((resolve, reject) => {
    var cql = `select count(*) from ${dbName}`

    AV.Query.doCloudQuery(cql).then(res => {
      resolve(res.count)
    }).catch(err => {
      reject(err)
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

async function fetchRecords(dbName, seqArr) {
  return new Promise((resolve, reject) => {
    var cql = `select * from ${dbName} where seq in (${seqArr.toString()})`

    AV.Query.doCloudQuery(cql).then(res => {
      resolve(res)
    })
  })
}

async function fetchRandomRecords(dbName, count, err) {
  return new Promise(async (resolve, reject) => {
    try {
      var total = await getRecordCount(dbName)
      var randArr = generateRandArr(total, count)
      var rs = await fetchRecords(dbName, randArr)

      resolve(rs)
    } catch(e) {
      Message.error(err)
      reject(e)
    }
  })
}
