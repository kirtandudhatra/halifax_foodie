const db = require('../lib/db-connection');

class RecipeModel{

    static async getRecipeByRestaurantId(restCode) {
        console.log(restCode)
        return new Promise((resolve, reject) => {
            try {
                const params = {
                    TableName: "recipes",
                    FilterExpression: "#restCode = :restCode_val",
                    ExpressionAttributeNames: {
                        "#restCode": "restCode",
                    },
                    ExpressionAttributeValues: { ":restCode_val": parseInt(restCode) }
                };
                db.scan(params, function(err, data) {
                    if (err) {
                        console.error('Error in recipe model: getRecipeByRestaurantId', err);
                        reject();
                    } else {
                        resolve(data["Items"]);
                    }
                });

            } catch (error) {
                console.error('Error in recipe model: getRecipeByRestaurantId', error);
                reject();
            }
        });
    }
}
module.exports = RecipeModel;