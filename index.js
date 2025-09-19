const express = require('express');
const mongoDbConnect = require("./app/mongodb/mongoDbConnect");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const easySession = require('easy-session');
require('dotenv').config();
const app = express();

app.use(express.json());

app.use(express.json({ type: 'application/json' }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Backend Code" });
});

app.use(
  session({
    secret: process.env.SESSION_SECRECT,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 86400000 },
  }),
);
app.use(easySession.main(session));

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
app.listen(PORT, async () => {
  console.log(`🚀 Server started at port ${PORT}`);
  await mongoDbConnect()
});
