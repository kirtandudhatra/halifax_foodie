const AWS = require("aws-sdk");
AWS.config.update({
    "accessKeyId" : "ASIATCX6KSZYJD7CNW4S",
    "secretAccessKey" : "Zytlz6okIv3HlgBplmyujcT1kSUfD1XaTFKtyZzN",
    "region" : "us-east-1",
    "sessionToken" : "FwoGZXIvYXdzEO7//////////wEaDOj8LwZQ//BgrSiKgSK/AWqTHF7Xsb1BEwZ/bJ9SgrXLpehpKoEMzjlDnIHPpdGHgdQiU074e/U+OgJEmgB6D0hbEKnZxf6a/9XHsfN0UavLk1MrPBz9NX52crdnN5BL1WUSl3h94nqXCXNyngmYUU8gbEh143GjFg1QF2h2HKrW+sLi8fX1c6Ke/LOu2MkJXlDptmxe7s8lSD7dPQtDT5HJCDTZZkwxTcBwKMFQoKFoD0kj6aF3ZuEQCdZ9vqrFsDkVoomA0759gMXZYeomKKDN5YcGMi0+1k2495VMm5UjyRKpUgyIYWYOfnJ5uV2tDauQUfttK+qg1LgWaoUoeFYJ1Ps="
} );

const lexClient = new AWS.LexRuntime();

module.exports = lexClient;
