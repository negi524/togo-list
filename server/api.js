const express = require("express");
const router = express.Router();
// const database = require("./database");  // database.jsモジュールを読み込む

// knexの設定
const knex = require("knex")({
  client: "sqlite3", // 使用するDBの種類
  // データベースの接続情報
  connection: {
    filename: "./db/mydb.sqlite3"
  },
  useNullAsDefault: true // sqliteを利用する場合のみ、true
});

// bookshelfの設定
const BookShelf = require("bookshelf")(knex);

// usersテーブルにアクセスするためのMyDataオブジェクト
const MyData = BookShelf.Model.extend({ tableName: "users" });
const Togo = BookShelf.Model.extend({ tableName: "togo" });

/**
 * user情報を取得するエンドポイント
 */
router.get("/users", (req, res, next) => {
  new MyData()
    .fetchAll()
    .then(collection => {
      res.json(collection);
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: { message: err.message }
      });
    });
});

/**
 * 行きたいところリストを取得するエンドポイント
 */
router.get("/togo", (req, res, next) => {
  new Togo()
    .fetchAll()
    .then(collection => {
      res.json(collection);
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: { message: err.message }
      });
    });
});

/**
 * 行きたいところリストを追加するエンドポイント
 */
router.post("/togo/add", (req, res, next) => {
  console.log("post access.");
  console.dir(req.body);
  const param = { post: req.body["message"] };
  res.header("Content-Type", "application/json");
  res.json(param);
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
