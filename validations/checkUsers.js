const {check} = require('express-validator')
const db = require('../db/dbConfig')
const { compare } = require('bcryptjs')


//email validator
const email = check('email').isEmail().withMessage('Please provide a valid email.')


const emailExists = check('email').custom(async (value)  =>{
  const result = await db.query('SELECT * from users WHERE email = $1', [value,
  ])

  if (result.length){
      throw new Error('Email is taken')
  }
})

//password validator
const password = check('password')
.isLength({min:6, max:15})
.withMessage('Password has to be between 6 to 16 characters')


//login validation
const loginFeildsCheck = check('email').custom(async(value, {req}) =>{
  const user = await db.query('SELECT * FROM users WHERE email = $1', [value])
  if (!user.length){
    throw new Error ("Email does not exist")
  }

  const password = await compare(req.body.password, user[0].password)

  if (!password){
    throw new Error("Wrong Password")
  }
  req.user=user[0]
})


const checkFirstName = (req, res, next) => {
  if (req.body.firstName) {
    next();
  }
  else {
    res.status(400).json({ error: "Firstname is required!" });
  }
}

const checkLastName = (req, res, next) => {
  if (req.body.lastName) {
    next();
  }
  else {
    res.status(400).json({ error: "Lastname is required!" });
  }
}

const checkAddress = (req, res, next) => {
  if (req.body.address) {
    next();
  }
  else {
    res.status(400).json({ error: "Address is required!" });
  }
}

const checkPhone = (req, res, next) => {
  if (req.body.phone) {
    next();
  }
  else {
    res.status(400).json({ error: "Phone Number is required!" });
  }
}


const checkBoolean = (req, res, next) => {
  const { isVerified } = req.body;
  if (["true", "false", true, false, undefined].includes(isVerified)) {
    next();
  }
  else {
    res.status(400).json({ error: "isVerified must be a boolean value!" });
  }
};

module.exports = {
  registerValidation: [email, password, emailExists],
  loginValidation: [loginFeildsCheck],
  checkFirstName,
  checkLastName,
  checkAddress,
  checkPhone,
  checkBoolean
};
