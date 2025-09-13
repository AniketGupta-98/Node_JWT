// import User from "../../mongodb/schema/Auth.schema";
const User = require("../../mongodb/schema/Auth.schema");


const Customers = function (body) {
    this.firstName = qrcodes.firstName;
    this.lastName = qrcodes.lastName;
    this.userId = qrcodes.userId;
};

Customers.qrCodeAll = (reqBody) => {
    return new Promise((resolve, reject) => {
       
    });
};


module.exports = Customers;