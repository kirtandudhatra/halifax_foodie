const AWS = require("aws-sdk");
AWS.config.update({
    "accessKeyId" : "ASIATCX6KSZYKHZIMT4Y",
    "secretAccessKey" : "Q7xZ+xJsOFOTHjMhMD/ZRron36uTk8ApBTTHvWEH",
    "region" : "us-east-1",
    "sessionToken" : "FwoGZXIvYXdzEOj//////////wEaDMLDqSjX4TUFrKD4oiK/AeRU31FzRSeC72wRPPOz+Ei4iUOZaTznlrciMCFclJlW3kArBflyiV27O9WRXW7bsQFo5Dk6nMAaW2vyCEiD41hnoe33RgzSPWnX5YOEkj1ODw1BvwcKQc4CtFybrwEy18f9Xn1guDQwhBHeKt7+5BHaXLmuFIjo6E21xhcs9Sqc3jtMKDwDYXjMhWBMy5pz7V79ieO39RhXVUP4bPmzKIgcqQYMNb4a5Jr0OEJ2J7hcs8wy8gLLqgsfYc3wA2OKKPOu5IcGMi2cAJvrxyekSxmYMZgvxANUGQ22IsAJDAwAiGKDn0jWPtmO18f0rknprUqJR4Y="
} );

const lexClient = new AWS.LexRuntime();

module.exports = lexClient;
