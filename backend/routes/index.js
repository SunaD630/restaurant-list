const fetch = require('node-fetch');
const mysql = require('mysql');
require('dotenv').config()
var http_request = require('request');
var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
const env = process.env
var pref_arr = [];

// sql connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'serfcx25F&',
  database: 'USER',
  multipleStatements: true
});
connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
  }); 

class Prefecture{
  constructor(prefCode, prefName){
    this._prefCode = prefCode;
    this._prefName = prefName;
  }
}
var URL = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
  var options = {
    url: URL,
    headers: {'X-API-KEY': env.RESAS_API_KEY},
    json: true
  };
http_request(options,function(error,response,body){
  body.result.forEach(pref => {
    pref_arr.push(pref.prefName);
  })
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.header('Access-Control-Allow-Headers','Content-Type',);
    res.header('Access-Control-Allow-Origin','http://localhost:3000');
    res.header('Access-Control-Allow-Methods','OPTIONS,POST,GET');
    res.json({"prefectures": pref_arr});
    // console.log("リクエスト受信済み");
    res.end();
});
router.post('/register',function(req,res) {
  res.header('Access-Control-Allow-Headers','Content-Type',);
  res.header('Access-Control-Allow-Origin','http://localhost:3000');
  res.header('Access-Control-Allow-Methods','OPTIONS,POST,GET');
  console.log("データが送信されました");
  console.log(req.body);
  res.end();
})



module.exports = router;
