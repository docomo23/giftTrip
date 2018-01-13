var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: "mydb",
  user: "root",
  password: "root"
});

var sql1 = "CREATE TABLE resorts(resort_ID varchar(80), resort_name varchar(255),\
			location varchar(255));";

var sql2 = "INSERT INTO resorts VALUES('123','GOOD RESORT','NYC');";

var sql3 = "INSERT INTO resorts VALUES('456','HEAVEN RESORT','LA');";

var sql4 = "CREATE TABLE newlywed(newlywed_ID varchar(255), newlywed_name_1 varchar(255),\
			newlywed_name_2 varchar(255),newlywed_email varchar(255));";

var sql5 = "INSERT INTO newlywed VALUES('1','kim','lucky','kim.gmail.com');";


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  con.query(sql2, function (err, result) {
    if (err) throw err;
    console.log("row inserted");
  });  
  con.query(sql3, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });  
  con.query(sql4, function (err, result) {
    if (err) throw err;
    console.log("row inserted");
  });
    con.query(sql5, function (err, result) {
    if (err) throw err;
    console.log("row inserted");
  });
});

