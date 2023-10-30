const express = require("express");
const userSchema = require("../schema/student");
const router = express.Router();

//create route form profile
router.post("/formstudent", (req, res) => {
  res.send("create profile student");
});



module.exports = router;
