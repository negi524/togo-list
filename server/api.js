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
const Togo = BookShelf.Model.extend({ tableName: "togo", idAttribute: "pid" });

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
        message: "DBの取得に失敗しました",
        detail: { message: err.message }
      });
    });
});

/**
 * 行きたいところリストを追加するエンドポイント
 * @param naem
 */
router.post("/togo/add", (req, res, next) => {
  console.log("requested content.");
  // console.dir(req.body);
  // 現在日時を計算
  const today = new Date();
  const YYYY = today.getFullYear();
  const MM = ("0" + (today.getMonth() + 1)).slice(-2);
  const DD = ("0" + today.getDate()).slice(-2);

  const addData = {
    about: req.body["name"],
    created: YYYY + MM + DD,
    updated: YYYY + MM + DD
  };

  new Togo(addData)
    .save()
    .then(model => {
      // 追加したデータを返却
      res.json(model.attributes);
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        message: "DBへの追加に失敗しました",
        detail: { message: err.message }
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
