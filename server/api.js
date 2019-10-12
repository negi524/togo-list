const express = require("express");
const router = express.Router();

router.get("/hoge", (req, res, next) => {
  const param = { test: "success" };
  res.header("Content-Type", "application/json");
  res.send(param);
});

module.exports = router;
