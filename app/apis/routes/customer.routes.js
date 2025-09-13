module.exports = (app) => {
    const customers = require("../controllers/customers.controllers")


    app.post("/create/user", customers.Create);

    // app.get("/customers", async (req, res) => {
    //     const data = await Auth.create({
    //         text: "done",
    //     });
    //     res.json({ message: "List of customers" });
    // });
};
