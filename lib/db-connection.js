const AWS = require("aws-sdk");
AWS.config.update({
    "accessKeyId" : "ASIAUFWLHNZ7UZFCUGWX",
    "secretAccessKey" : "7FW5Fd8q74237kpu8F4lSDBPukUn7O1q/7cmcIFU",
    "region" : "us-east-1",
    "sessionToken" : "FwoGZXIvYXdzEPD//////////wEaDE2ydEekE7UpyKmoyCK/ARdPbmF1yUDJZil+gUkjRc/FK8tR76bgudL6FcMHKHZEef1oSNoQ+V5VOCUC7pD1Wo7MgbL5wCyzv8dXg8yDI4n4FU50P5Qm0MZakmEFHuAbiE2KPx6ffwrEea/JK6ZB3JhOVxruWLlieuy6Vang2gt+eCvuhcwylS4XLqjuo4rmNrCoPhFjoVAaJQc+WvW7KvRgcpPp9WBlCbpsdmB+rIpU615AOrVhLkk9YWI++q7/tZXzuC8O6fmCuD1nPTPAKOGA5ocGMi2uvRJKeDCBle/gjSAN0c3bzH4xzaL8y4uEWiBeye3nSKSbCcLsLgDbG+hsYEk="
} );
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;
