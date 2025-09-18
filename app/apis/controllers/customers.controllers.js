const Customers = require('../models/customer.model');
const jwt = require('jsonwebtoken');

const { isValidEmail, isValidContact } = require('../../validator/index')

exports.create = async (req, res) => {
    try {
        if (!Object.keys(req.body).length) {
            return res.status(400).json({
                errorcode: "208",
                message: "Request body is missing.",
            });
        }
        const requiredFields = ['firstName', 'lastName', 'userId', "password", "contact", "email"];
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                errorcode: '209',
                message: `Missing required field(s): ${missingFields.join(', ')}`,
            });
        }
        if (!isValidEmail(req.body.email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        if (!isValidContact(req.body.contact)) {
            return res.status(400).json({ error: 'Contact must be a 10-digit number' });
        }

        const createUser = await Customers.userCreate(req.body);

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


exports.login = async (req, res) => {
    try {
        if (!Object.keys(req.body).length) {
            return res.status(400).json({
                errorcode: "208",
                message: "Request body is missing.",
            });
        }
        const { userId, password } = req.body
        const requiredFields = ['userId', "password"];
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                errorcode: '209',
                message: `Missing required field(s): ${missingFields.join(', ')}`,
            });
        }

        const checkUser = await Customers.existUser(userId);
        if (!checkUser.success) {
            return res.status(404).json({
                errorcode: '210',
                message: 'User ID does not exist',
            });
        }

        if (checkUser.userData?.password !== password) {
            return res.status(401).json({
                errorcode: '211',
                message: 'Incorrect password',
            });
        }

        const access_token = jwt.sign(
            {
                id: checkUser.userData._id,
                UserId: checkUser.userData.userId,
                email: checkUser.userData.email,
                createdAt: checkUser.userData.createdAt,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2d",
            }
        );

        const tokenUpdate = await Customers.updateAccessToken(checkUser.userData._id, access_token);

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            userData: tokenUpdate,
        });
    } catch (error) {
        console.error("Error in Create:", error);
        return res.status(500).json({
            errorcode: '500',
            message: 'Internal server error',
        });
    }
};
