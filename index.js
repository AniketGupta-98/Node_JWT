const express = require('express');
const mongoDbConnect = require("./app/mongodb/mongoDbConnect");
require('dotenv').config();
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Backend Code" });
});

const routeModules = [
  "./app/apis/routes/customer.routes.js",
];

routeModules.forEach((routePath) => {
  const route = require(routePath);
  if (typeof route === 'function') {
    route(app);
  } else {
    console.log(`Route module at ${routePath} does not export a function.`);
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
  console.log(`🚀 Server started at port ${PORT}`);
  // await mongoDbConnect()
});
