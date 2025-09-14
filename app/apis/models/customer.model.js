import User from "../../mongodb/schema/Auth.schema";
class Customers {
    constructor(body) {
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.userId = body.userId;
    }
}

Customers.qrCodeAll = (reqBody) => {
    return new Promise((resolve, reject) => {

        const existUser = User.find({
            UserId: reqBody.userId
        })

        if (existUser) {
            resolve()
        }

    });
};


module.exports = Customers;