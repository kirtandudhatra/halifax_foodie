const Exception = require('../lib/exceptions');
const OrderModel = require('../model/order.model');

class OrderController {
    static async placeOrder(req, res) {
        try {
            const reqData = req.body;

            const orderId = await OrderModel.placeOrder(reqData);
            return res.sendResponse({
                success: true,
                message: 'Order Placed',
                data: orderId
            });

        } catch (error) {
            console.error('Error in OrderController: placeOrder', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }

    static async getOrdersByRestaurantId(req, res) {
        try {
            const reqData = req.params;

            const orders = await OrderModel.getOrdersByRestaurantId(reqData.restaurantId);
            return res.sendResponse({
                success: true,
                message: 'Orders retrieved!',
                data: orders
            });

        } catch (error) {
            console.error('Error in OrderController: getOrdersByRestaurantId', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }

    static async getOrdersByUserId(req, res) {
        try {
            const reqData = req.params;

            const orders = await OrderModel.getOrdersByUserId(reqData.userId);
            return res.sendResponse({
                success: true,
                message: 'Orders retrieved!',
                data: orders
            });

        } catch (error) {
            console.error('Error in OrderController: getOrdersByUserId', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }

    static async getOrderByOrderId(req, res) {
        try {
            const reqData = req.params;

            const order = await OrderModel.getOrderByOrderId(reqData.orderId);
            return res.sendResponse({
                success: true,
                message: 'Order retrieved!',
                data: order
            });

        } catch (error) {
            console.error('Error in OrderController: getOrderByOrderId', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }

    static async updateOrderStatus(req, res) {
        try {
            const {orderId} = req.params;
            const {status} = req.body;

            await OrderModel.updateOrderStatus(orderId,status);
            return res.sendResponse({
                success: true,
                message: 'Order status updated!!'
            });

        } catch (error) {
            console.error('Error in OrderController: updateOrderStatus', error);
            return res.sendError(new Exception('GeneralError'));
        }
    }
}

module.exports = OrderController;