const {
    ComprehendClient,
    DetectSentimentCommand,
} = require("@aws-sdk/client-comprehend");
const Exception = require('../lib/exceptions');
const FeedbackModel = require('../model/feedback.model');
const client = new ComprehendClient(
    {
        region: "us-east-1",
        credentials: {
            "accessKeyId" : "ASIAUFWLHNZ7UZFCUGWX",
            "secretAccessKey" : "7FW5Fd8q74237kpu8F4lSDBPukUn7O1q/7cmcIFU",
            "region" : "us-east-1",
            "sessionToken" : "FwoGZXIvYXdzEPD//////////wEaDE2ydEekE7UpyKmoyCK/ARdPbmF1yUDJZil+gUkjRc/FK8tR76bgudL6FcMHKHZEef1oSNoQ+V5VOCUC7pD1Wo7MgbL5wCyzv8dXg8yDI4n4FU50P5Qm0MZakmEFHuAbiE2KPx6ffwrEea/JK6ZB3JhOVxruWLlieuy6Vang2gt+eCvuhcwylS4XLqjuo4rmNrCoPhFjoVAaJQc+WvW7KvRgcpPp9WBlCbpsdmB+rIpU615AOrVhLkk9YWI++q7/tZXzuC8O6fmCuD1nPTPAKOGA5ocGMi2uvRJKeDCBle/gjSAN0c3bzH4xzaL8y4uEWiBeye3nSKSbCcLsLgDbG+hsYEk="
        }
    }
);

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

    static async analysis(req, res) {
        try {
            const reqData = req.params;

            const feedbackInfo = await FeedbackModel.getFeedbackByRestaurantId(reqData.restaurantId);

            let parsedJsonFeedback = [];

            for (let i = 0; i < feedbackInfo.length; i++) {

                const command = new DetectSentimentCommand({
                    LanguageCode: "en",
                    Text: feedbackInfo[i].feedback,
                });
                const response = await client.send(command);
                let temp = {};
                temp.feedback = feedbackInfo[i].feedback;
                const sentimentScore = response.Sentiment;
                temp = { ...temp, sentimentScore };

                parsedJsonFeedback.push(temp);
            }

            console.log(parsedJsonFeedback);

            return res.sendResponse({
                success: true,
                message: 'Feedback Analysis retrieved',
                data: parsedJsonFeedback
            });

        } catch (error) {
            console.error('Error in Feedback controlller', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }
}

module.exports = FeedbackController;