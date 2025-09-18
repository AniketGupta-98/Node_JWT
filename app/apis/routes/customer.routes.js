module.exports = (app) => {
    const customers = require("../controllers/customers.controllers")


    app.post("/user/create", customers.create);

    app.post("/user/login", customers.login);

};
