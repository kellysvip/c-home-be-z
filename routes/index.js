var express = require("express");
const { getHomes } = require("../api/controllers/home/getHomes");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("Welcome to CoderSchool!");
});

router.get('/home', getHomes);


module.exports = router;
