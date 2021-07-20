const db = require('../lib/db-connection');

class UserModel{
    static async placeOrder(orderData) {
        return new Promise((resolve, reject) => {
            try {
                const params = {
                    TableName: "orders",
                    Item: orderData
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
}
module.exports = UserModel;