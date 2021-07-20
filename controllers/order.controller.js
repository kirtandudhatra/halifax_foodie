const Exception = require('../lib/exceptions');
const OrderModel = require('../model/order.model');

class Users {
    static async placeOrder(req, res) {
        try {
            const reqData = req.body;
            
            console.log(reqData)
            //await OrderModel.placeOrder(reqData);
            return res.sendResponse({
                success: true,
                message: 'User updated'
            });

        } catch (error) {
            console.error('Error in placeOrder controlller', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }
}

module.exports = Users;