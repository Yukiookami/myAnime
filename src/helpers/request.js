import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

function request(cql, params, errHint='') {
  for(let key in params) {
    var value = fixBracket(params[key])
    cql = cql.replaceAll('{{' + key + '}}', value)
  }

  return new Promise((resolve, reject) => {
    AV.Query.doCloudQuery(cql).then(res => {
      resolve(res)
    }).catch(err => {
      errHint && Message.error(errHint)
      reject(err)
    })
  })
}

function fixBracket(word) {
  if((typeof word).toLowerCase() === 'string') {
    word = word.replace(/([\(\)])/g, '[$1]')
  }
  return word
}

export default request
