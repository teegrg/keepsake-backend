const passport = require('passport')
const { Strategy } = require('passport-jwt')
const { SECRET } = require('../constants/index.js')
const db = require('../db/dbConfig')


exports.userAuth = passport.authenticate('jwt', { session: false })

const cookieExtractor = function (req) {
  let token = null
  if (req && req.cookies) token = req.cookies['token']
  return token
}

const opts = {
  secretOrKey: SECRET,
  jwtFromRequest: cookieExtractor,
}

passport.use(
  new Strategy(opts, async ({ id }, done) => {
    try {
      const results = await db.query(
        'SELECT user_id, email, first_name, last_name FROM users WHERE user_id = $1', [id]
      );
          
      console.log(results[0]);
      if (!results.length) {
        throw new Error('401 not authorized');
      }

      let user = { 
        id: results[0].user_id, 
        email: results[0].email, 
        first_name: results[0].first_name, 
        last_name:results[0].last_name 
      }

      return await done(null, user)
    }
    catch (error) {
      console.log(error.message);
      done(null, false);
    }
  })
);
