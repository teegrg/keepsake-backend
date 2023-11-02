const checkAddress = (req, res, next) => {
  if (req.body.address) {
    next();
  }
  else {
    res.status(400).json({ error: "Address is required!" });
  }
}

const checkSize = (req, res, next) => {
  if (req.body.size) {
    next();
  }
  else {
    res.status(400).json({ error: "Size is required!" });
  }
}

const checkBoolean = (req, res, next) => {
  const { isRented } = req.body;
  if (["true", "false", true, false, undefined].includes(isRented)) {
    next();
  }
  else {
    res.status(400).json({ error: "isRented must be a boolean value!" });
  }
};

module.exports = { checkAddress, checkSize, checkBoolean };
