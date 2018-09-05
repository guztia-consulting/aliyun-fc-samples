const ALY = require('aliyun-sdk')

const accessKeyId = '_accessKeyId_'
const secretAccessKey = '_secretAccessKey_'

exports.handler = (event, context, callback) => {
  const { payload } = JSON.parse(event)
  
  const ecs = new ALY.ECS({
    accessKeyId,
    secretAccessKey,
    endpoint: 'https://ecs.aliyuncs.com',
    apiVersion: '2014-05-26',
  })

  ecs.stopInstance({ InstanceId: payload  }, callback)
}
