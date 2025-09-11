module.exports = (app) => {
    // const customers = require("../controllers/customer.controller.js");

    app.get("/customers", (req, res) => {res.json({ message: "List of customers" });});
};
