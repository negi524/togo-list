const express = require("express");
const router = express.Router();
// const database = require("./database");  // database.jsモジュールを読み込む
// SQLite3を利用する設定
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db/mydb.sqlite3");

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
      res.send(collection);
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
      res.send(collection);
    })
    .catch(err => {
      res.status(500).json({
        error: true,
        data: { message: err.message }
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
