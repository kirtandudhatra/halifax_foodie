const Exception = require('../lib/exceptions');
const FeedbackModel = require('../model/feedback.model');

class FeedbackController {
    static async create(req, res) {
        try {
            const reqData = req.body;

            await FeedbackModel.create(reqData);
            return res.sendResponse({
                success: true,
                message: 'Feedback created!'
            });

        } catch (error) {
            console.error('Error in FeedbackController: create', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }

    static async getFeedbackByRestaurantId(req, res) {
        try {
            const reqData = req.params;

            const feedbackInfo = await FeedbackModel.getFeedbackByRestaurantId(reqData.restaurantId);
            return res.sendResponse({
                success: true,
                message: 'Feedback retrieved!',
                data: feedbackInfo
            });

        } catch (error) {
            console.error('Error in FeedbackController: getFeedbackByRestaurantId', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }
}

module.exports = FeedbackController;