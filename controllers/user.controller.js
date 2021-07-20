const Exception = require('../lib/exceptions');
const UserModel = require('../model/user.model');

class Users {
    static async register(req, res) {
        try {
            const reqData = req.body;

            await UserModel.register(reqData);
            return res.sendResponse({
                success: true,
                message: 'User updated'
            });

        } catch (error) {
            console.error('Error in register controlller', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }
}

module.exports = Users;