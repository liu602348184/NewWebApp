// var express = require('express');
//载入模块
var http = require("http");  
var mysql = require('mysql');
//连接mysql数据库
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'votesystem',
    port:3306
});
conn.connect();	
//侦听端口http连接
http.createServer(function(request, response) {    
    response.writeHead(200, {"Content-Type": "text/html"});    
	conn.query("select * from votingoption", function(err, rows, fields){
	    response.write("<ul>");    
		for(var i=0;rows[i];i++){
		    response.write("<li>"+rows[i].optionName+"</li>");    
		}
	    response.write("</ul>");    
	    response.end();  
	});
	response.write("testPosition");
}).listen(8000);  
// console.log("nodejs start listen 8888 port!");  
console.log("mysql is connecting....");  