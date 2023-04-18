const express = require("express");
const auth = require("./authRouter");
const property = require("./propertyRouter");
const router = express.Router();

router.use(auth);

router.use(property);

module.exports = router; 
