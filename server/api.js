const express = require("express");
const router = express.Router();
const moment = require("moment");
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
const Togo = BookShelf.Model.extend({ tableName: "togo", idAttribute: "pid" });

/**
 * 行きたいところリストを取得するエンドポイント
 */
router.get("/v1/togo", (req, res, next) => {
  console.log(req.headers);
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
 * @param name: 行きたいところの名前
 */
router.post("/v1/togo/add", (req, res, next) => {
  // 現在日時を計算
  const now = moment();
  const date = now.format("YYYYMMDD");

  const addData = {
    about: req.body["name"],
    created: date,
    updated: date
  };

  new Togo(addData)
    .save()
    .then(model => {
      // 追加したデータを返却
      res.status(201).json(model.attributes);
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
 * 行きたいところリストを削除するエンドポイント
 * パスパラメータで指定する
 * @param pid: 削除対象のPid
 */
router.delete("/v1/togo/:pid", (req, res, next) => {
  // 削除対象のIDを取得
  console.log(req.params.pid);
  // 削除が完了したことを返却する
  res.status(204).json();
});

/**
 * 固定のJSONを返却するエンドポイント
 */
router.get("/v1/test", (req, res, next) => {
  const param = { test: "success" };
  res.header("Content-Type", "application/json");
  res.send(param);
});

module.exports = router;
