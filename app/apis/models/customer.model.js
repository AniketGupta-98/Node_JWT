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
            UserId: reqBody.userId
        });
        if (existUser && existUser.length > 0) {
            resolve({ success: false, message: "User already exist" });
        } else {
            const createUser = await User.create({
                FirstName: reqBody.firstName,
                LastName: reqBody.lastName,
                UserId: reqBody.userId
            });

            if (createUser && createUser._id) {
                resolve({ success: true, message: "user created successfully" });
            } else {
                resolve({ success: false, message: "failed to create user" });
            }
        }
    });
};


module.exports = Customers;