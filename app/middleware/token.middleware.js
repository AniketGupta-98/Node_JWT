var jwt = require('jsonwebtoken');
const Auth = require('../mongodb/schema/Customer.schema')



const authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];
  const user = jwt.decode(token, process.env.JWT_SECRET);

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
      null
    });
  } else {
    res.status(401).send({ result: 'Token not provided' });
  }

}






module.exports = {
  authenticateJWT
};