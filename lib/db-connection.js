const AWS = require("aws-sdk");
AWS.config.update({
    "accessKeyId" : "ASIAUFWLHNZ7UOQDKDZW",
    "secretAccessKey" : "J9A9zBS4bbBkm/fehulRdJTnvKNNK818iRXHDtHX",
    "region" : "us-east-1",
    "sessionToken" : "FwoGZXIvYXdzEPb//////////wEaDLsM4J4zSqKncnEsxiK/AQgS9H+V3ssDYSNBRSS8UGB6ZL/7MYuUHGXG3Uo0JU3OX9yPEEnz9WylN/6dCIsaetNUdyDMwSwYHadO/FarN2OssVMUyq69gV2vBAPLOp9e+xfzNsyTPqV+xbwyoh8Mt9h3uNOJPW499+styEqLW4Vh6AXcDaOo6R7Ph/KHxxkcjqgED1HNI0Ijl1UZbUEZVmw1zKg2YE2s0QwhHs1hG+JHSGch0Q99GPvfwDtV+CMz/l4iitOPOJP75dn2XfstKNuq54cGMi1vJsPyESuXrGetCQJI+UIyGuimkoLzQGup6SF0JXfCUVC3LRJwQOpMxmKW3QA="
} );
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;
