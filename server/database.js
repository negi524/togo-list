const sqlite3 = require("sqlite3");

let db = new sqlite3.Database("./db/mydb.sqlite3");

db.serialize(() => {
  db.all("select * from users", (err, rows) => {
    console.dir(rows);
  });
});
