const Customers = require('../models/customer.model');

exports.Create = async (req, res) => {
    try {
        if (!Object.keys(req.body).length) {
            return res.status(400).json({
                errorcode: "208",
                message: "Request body is missing.",
            });
        }

        const { firstName, lastName, userId } = req.body;
        const requiredFields = ['firstName', 'lastName', 'userId'];
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                errorcode: '209',
                message: `Missing required field(s): ${missingFields.join(', ')}`,
            });
        }

        const createUser = await Customers.userCreate(req.body)

        return res.status(201).json({
            success: createUser.success,
            message: createUser.message,
        });
    } catch (error) {
        console.error("Error in Create:", error);
        return res.status(500).json({
            errorcode: '500',
            message: 'Internal server error',
        });
    }
};
