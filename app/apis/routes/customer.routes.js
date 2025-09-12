module.exports = (app) => {
    const customers = require("../controllers/customers.controllers")
    const Auth = require("../../mongodb/schema/Auth.schema");

    app.get("/create/user", customers.Create);

    app.get("/customers", async (req, res) => {
        const data = await Auth.create({
            text: "done",
        });
        res.json({ message: "List of customers" });
    });
};
