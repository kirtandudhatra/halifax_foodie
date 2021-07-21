const Exception = require('../lib/exceptions');
const UserModel = require('../model/user.model');

class UsersController {
    static async register(req, res) {
        try {
            const reqData = req.body;

            await UserModel.register(reqData);
            return res.sendResponse({
                success: true,
                message: 'User created!'
            });

        } catch (error) {
            console.error('Error in UserController: register', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }

    static async getUserData(req, res) {
        try {
            const reqData = req.params;

            const userInfo = await UserModel.getUserData(reqData);
            console.log(userInfo)
            return res.sendResponse({
                success: true,
                message: 'User updated',
                data: userInfo
            });

        } catch (error) {
            console.error('Error in UserController: getUserData', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }

    static async verifySecurityQuestions(req, res) {
        try {
            const {userId, q1, q2} = req.body;

            const userInfo = await UserModel.getUserData({userId});

            if(q1!==userInfo.q1 || q2!==userInfo.q2){
                return res.sendError(new Exception('Unauthorized','Invalid Answers!'));
            }
            return res.sendResponse({
                success: true,
                message: 'User authorized!'
            });

        } catch (error) {
            console.error('Error in UserController: verifySecurityQuestions', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }
}

module.exports = UsersController;