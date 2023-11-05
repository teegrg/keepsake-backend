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

const checkEmail = (req, res, next) => {
  if (req.body.email) {
    next();
  }
  else {
    res.status(400).json({ error: "Email is required!" });
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

const checkPassword = (req, res, next) => {
  if (req.body.password) {
    next();
  }
  else {
    res.status(400).json({ error: "A password is required!" });
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
  checkFirstName,
  checkLastName,
  checkAddress,
  checkEmail,
  checkPhone,
  checkPassword,
  checkBoolean
};
