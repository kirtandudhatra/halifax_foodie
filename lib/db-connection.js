const AWS = require("aws-sdk");
AWS.config.update({
    "accessKeyId" : "ASIATCX6KSZYL5MGXJXE",
    "secretAccessKey" : "ZSdT9p3UgJuD3HQkCn4Kk9kt8t0b4iXATYBF8KY7",
    "region" : "us-east-1",
    "sessionToken" : "FwoGZXIvYXdzEO3//////////wEaDKqz7r/VfRs2YlGj5SK/AYCt5+OjjyOP2thgEBbEzV1AldMhO1WUVFUc79Kvqm4keLG/u9HKnYGjz3ZqSLbz/yq41nmKk6tZcewsD+GsJUerwwKVoJQWE9FqpgkUiD5z8D737d1UHZLB7C0FRA91nD8RjiBCznw7yJCMIYjKGgAmMR+P4IFFSnPGSHyO8CbJjLQvNAE4CtnCYRJ9Cl0cMLL48HzOb7lYl75coDsHgY/H02R/oW6KXNbOudad3Q57cFkjwsRn6rf7f7NUkmzfKNih5YcGMi0b6LUM4wzfFMRPxTyW1u8TyQoc0GZp/jmZxxAI1yWtaMMTJ1/B7fSTGjujO74="
} );
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;
