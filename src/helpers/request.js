import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

function request(cql, params, errHint='') {
  for(let key in params) {
    cql = cql.replaceAll('{{' + key + '}}', params[key])
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

export default request
