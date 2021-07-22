const AWS = require("aws-sdk");
AWS.config.update({
    "accessKeyId" : "ASIATCX6KSZYHNRYNULY",
    "secretAccessKey" : "r+C+6qX4jK8vDJ4EwwnZ8tuHLRWUMVrUy3YB7lkY",
    "region" : "us-east-1",
    "sessionToken" : "FwoGZXIvYXdzEPP//////////wEaDPBKHtDuMQ/o7VPF2yK/ATvMnx1MNxOtsl1fTs2T9UaCu0oxW1whgJlFlflU6qY607J4S7qm+d2icnxYQfSYBEclNGYiKxpRtImQrdNKBfLO4idshw5nk0PgNShPrTTHMiSWTz7xSHs48fkK3PAYbIDwqqSNGYBVRUv3fCQ7dXDzi6LLPTDbTaS6oTAGEEqqLcVx3qc5FdsAXz0vJehcVrigLPeoOO1O8JPtUIT5r1p/uOQHdOYJgTv2tcqxwHDF4s2PLyNBsMuX/Q8Mxm/KKMHd5ocGMi0v6HR4d6fHJX+RgAJ9WUdNPyfvvnigb60nBiFPC0V/QkAaGzZUKh87epnKcrw="
} );
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;
