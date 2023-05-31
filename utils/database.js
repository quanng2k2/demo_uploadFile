const mysql = require("mysql2");

let poot = mysql.createPool({
  host: "localhost",
  database: "abc",
  user: "root",
  password: "12345678",
});

let database = poot.promise();
module.exports = database;
