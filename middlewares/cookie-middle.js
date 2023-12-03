

// const jwt = require('jsonwebtoken');
// const { SECRET } = require('../constants/index.js');

// function verifyToken(req, res, next) {
//   const token = req.headers.authorization; // Get token from the Authorization header

//   if (!token) {
//     return res.status(403).json({ error: 'Token not provided' });
//   }

//   jwt.verify(token, SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }
//     req.user = decoded; 
//     next();
//   });
// }

// module.exports = { verifyToken };
