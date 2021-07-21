const AWS = require("aws-sdk");
AWS.config.update({
    "accessKeyId" : "ASIATCX6KSZYBAUSCRHJ",
    "secretAccessKey" : "yzet04CEt/3S+ARUc588wx5Od2dVL2/1hKu5vtaD",
    "region" : "us-east-1",
    "sessionToken" : "FwoGZXIvYXdzENz//////////wEaDK6sXpbJgHXOJRn4VCK/Afovt8BfGIV5An5YYFHGydVULovqHGpg/qitX3vmbFUt0ckyo9pxb0RMNl2/m7m0YZGSkHrbCIa8Qi22JfzWB6UOb0eD1vxjrzJAQOsYuN6oP1y+LJwz+eMFfYQLpG/ztvLTSSq4cYwjSTYPRj8McjWbidj9lypp9nFtZ5JOsh6p9rgrOwRD/3CT4NGqsrEvxSn/OBt/U6hZ2ovOfc7cR4tGRGAl4oVHtbibO3nnXmuGBmOGuST98UHi7h/dMPItKMDD4YcGMi21bX9fTcPUddK+R2Z9feNRnZdx73tOk70ZvnzGJ0bbAIQVhCq43f2oTTvbCOM="
} );

const lexClient = new AWS.LexRuntime();

module.exports = lexClient;
