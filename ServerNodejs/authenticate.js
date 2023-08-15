const jwt = require('jsonwebtoken');
const UserModel = require('./models/User'); 

function authenticateToken(req, res, next) {
  const token = req.headers['token'];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, process.env.secretKeyForToken, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    console.log("req",req.body)
    req.userId=decoded.userId

    // UserModel.findById(req.userId)
    // .then(user => {
    //   if (!user) {
    //     return res.status(404).json({ error: 'User not found' });
    //   }
    //   res.json({ user });
    // })
    // .catch(error => {
    //   console.error('Error fetching user:', error);
    //   res.status(500).json({ error: 'Something went wrong' });
    // });
    next();
  });
}

module.exports = authenticateToken;