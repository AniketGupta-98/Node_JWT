module.exports = (app) => {
    const Auth = require("../../mongodb/schema/Auth.schema");

    app.get("/customers", async (req, res) => { 
              const data = await Auth.create({
        text: "done",
      });
        res.json({ message: "List of customers" }); });
};
