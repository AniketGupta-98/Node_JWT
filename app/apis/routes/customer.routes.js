module.exports = (app) => {
    const customers = require("../controllers/customers.controllers")
    const access_token = require('../../middleware/token.middleware');


    app.post("/user/create", customers.create);

    app.post("/user/login", customers.login);

    app.get("/get-user", access_token.authenticateJWT, customers.getAllUser);

};
