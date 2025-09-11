module.exports = (app) => {
    app.get("/customers", (req, res)=>{
        res.json("hello customer")
    });
};
