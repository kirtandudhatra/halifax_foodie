const db = require('../lib/db-connection');

class UserModel{
    static async register(userData) {
        return new Promise((resolve, reject) => {
            try {
                const params = {
                    TableName: "users",
                    Item: userData
                };
                db.put(params, function(err, data) {
                    if (err) {
                        reject();
                    } else {
                        console.log("Added user:", JSON.stringify(data));
                        resolve();
                    }
                });

            } catch (error) {
                console.error('Error in model register', error);
                reject();
            }
        });
    }

    static async getUserData(query) {
        return new Promise((resolve, reject) => {
            try {
                const params = {
                    TableName: "users",
                    Key: query
                };
                console.log(params);
                db.get(params, function(err, data) {
                    if (err) {
                        reject();
                    } else {
                        console.log("Added user:", JSON.stringify(data));
                        resolve(data["Item"]);
                    }
                });

            } catch (error) {
                console.error('Error in model getUserData', error);
                reject();
            }
        });
    }
}
module.exports = UserModel;