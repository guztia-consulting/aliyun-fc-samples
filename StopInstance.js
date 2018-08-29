'use strict';

const aliyunSDK = require('aliyun-sdk');

exports.handler = (event, context, callback) => {
    const eventData = JSON.parse(event);
    const { instanceId } = eventData;
    const { credentials  } = context;
    const { accessKeyId, accessKeySecret } = credentials;
    const ecsArgs = { InstanceId: instanceId };

    const ecs = new aliyunSDK.ECS({
        accessKeyId,
        secretAccessKey: accessKeySecret,
        endpoint: 'https://ecs.aliyuncs.com',
        apiVersion: '2014-05-26'
    });

    const onStopHandler = (err, res) => {
        if (err) {
            callback(err);
        }

        callback(null, 'all good');
    };

    ecs.stopInstance(ecsArgs, onStopHandler);
};
