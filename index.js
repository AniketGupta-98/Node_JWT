const express = require('express');
require('dotenv').config()
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Backend Code" });
});

const PORT = process.env.PORT||8000;


const routeModules = [
  "./app/apis/routes/customer.routes.js",
];

routeModules.forEach((routePath) => {
  require(routePath)(app);
});

app.listen(PORT,async()=>{
    console.log(`Server started at Port ${PORT}`)
})