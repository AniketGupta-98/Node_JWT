const User = require('../../mongodb/schema/Customer.schema');
class Customers {
    constructor(body) {
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.userId = body.userId;
    }
}

Customers.userCreate = (reqBody) => {
    return new Promise(async (resolve, reject) => {

        const existUser = await User.find({
            userId: reqBody.userId
        });
        if (existUser && existUser.length > 0) {
            resolve({ success: false, message: "User already exist" });
        } else {
            const createUser = await User.create({
                firstName: reqBody.firstName,
                lastName: reqBody.lastName,
                userId: reqBody.userId,
                password: reqBody.password,
                mobile: reqBody.contact,
                email: reqBody.email
            });

            if (createUser && createUser._id) {
                resolve({ success: true, message: "user created successfully" });
            } else {
                resolve({ success: false, message: "failed to create user" });
            }
        }
    });
};

Customers.existUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        const existUser = await User.findOne({ userId });
        if (Object.keys(existUser).length != 0) {
            resolve({ success: true, userData: existUser });
        } else {
            resolve({ success: false, userData: {} });
        }
    });
};


module.exports = Customers;