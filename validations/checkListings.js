const checkStreet = (req, res, next) => {
  if (req.body.street) {
    next();
  }
  else {
    res.status(400).json({ error: "Street address is required!" });
  }
}

const checkCity = (req, res, next) => {
  if (req.body.city) {
    next();
  }
  else {
    res.status(400).json({ error: "City is required!" });
  }
}

const checkState = (req, res, next) => {
  if (req.body.state) {
    next();
  }
  else {
    res.status(400).json({ error: "State is required!" });
  }
}

const checkZip = (req, res, next) => {
  if (req.body.zip) {
    next();
  }
  else {
    res.status(400).json({ error: "Zip is required!" });
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

module.exports = { checkStreet, checkCity, checkState, checkZip, checkSize, checkBoolean };
