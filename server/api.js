const express = require("express");
const router = express.Router();
// const database = require("./database");  // database.jsモジュールを読み込む
// SQLite3を利用する設定
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db/mydb.sqlite3");

router.get("/hoge", (req, res, next) => {
  const param = { test: "success" };
  res.header("Content-Type", "application/json");
  res.send(param);
});

/**
 * user情報を取得するエンドポイント
 */
router.get("/users", (req, res, next) => {
  db.serialize(() => {
    db.all("select * from users", (err, rows) => {
      console.dir(rows);
      res.header("Content-Type", "application/json");
      res.send(rows);
    });
  });
});

/**
 * 固定のJSONを返却するエンドポイント
 */
router.get("/test", (req, res, next) => {
  const param = { test: "success" };
  res.header("Content-Type", "application/json");
  res.send(param);
});

module.exports = router;
