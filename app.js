var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
const helmet = require('helmet')



var connection = mysql.createConnection({
     host: '66.57.32.186',
     port: 5306,
     user: 'widernetunc',
     password: 'H33w@ck',
     database: 'test'
});

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
  })


app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));









var server = app.listen(3000, "127.0.0.1", function () {
 
    var host = server.address().address
    var port = server.address().port
   //"https://powerful-harbor-88011.herokuapp.com/" +
    console.log("Example app listening at http://%s:%s", host, port)
   
});
app.get('/hostid', function(req, res, next) {
	connection.query('select HostID from test.resourcepoints where ResourceID=16', function (error, results, fields) {
        if (error) throw error;
		res.end(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
