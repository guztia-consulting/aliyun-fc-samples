const ALY = require('aliyun-sdk')

const handler = (event, context, callback) => {
    const { credentials, region } = context
    const { accessKeyId, accessKeySecret, securityToken } = credentials
    const ecsArgs = JSON.parse(event)

    const ecs = new ALY.ECS({
        accessKeyId,
        secretAccessKey: accessKeySecret,
        endpoint: 'https://ecs.aliyuncs.com',
        apiVersion: '2014-05-26',
        region,
        securityToken,
    })

    ecs.stopInstance(ecsArgs, callback)
}

module.exports = { handler }
