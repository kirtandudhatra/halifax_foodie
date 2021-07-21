const AWS = require("aws-sdk");
AWS.config.update({
    "accessKeyId" : "ASIATCX6KSZYDRZ6UMQ7",
    "secretAccessKey" : "YbeBcZzOFkwq4uKA5BAzqZq++FTyYoWy4sf+FNJ2",
    "region" : "us-east-1",
    "sessionToken" : "FwoGZXIvYXdzEM///////////wEaDIFwXuZcjFGAAWkUuSK/AT+fGf9Tard9ss2IzpvFjaEn4AOYVsxwjNaeXUCwbCGNyXxECfhdVTU+NO8kZ9tYavZG2EDTvjNws5NgoNzdttHDHW0MemHJtNCHh0dkkN4C+tvPSKAvOlI/j0EKloq9XEYqMIWUpsU4YIY5Tj0p6iZ/F3rQN4gDPzO0zgThASWgAzEVF4pHj0rW4A3m6Jnik9AKpdt9yId4G0M/SYqPMPI4f2mXsefUVo0FUF+/s2BoZvBH+D4EFglE1P1NZe/8KOXr3ocGMi2nGZVoCvd+ZZ9lR6z1Z2T+cU4ATV0kuJqFmTiEfXQUU0/C11kFCBIrnn0blYQ="
} );
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;
