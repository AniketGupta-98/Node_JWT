var jwt = require('jsonwebtoken');
const Auth = require('../mongodb/schema/Customer.schema')



const authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];
  const getUser = jwt.decode(token, process.env.JWT_SECRET);
  const existUser = await Auth.find({ userId: getUser.userId });

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
      if (err) res.status(450).send({ message: 'Session Expired' });
      else {
        const userid = payload.userId;
        const sessionid = req.session.id;
        const timeToExpireSession = req.session.cookie.originalMaxAge - req.session.cookie.maxAge;

        if (timeToExpireSession >= 2400000 && timeToExpireSession <= 3600000) {

        } else {

        }
      }
    });
  } else {
    res.status(401).send({ result: 'Token not provided' });
  }

}






module.exports = {
  authenticateJWT
};