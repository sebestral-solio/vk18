const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'prerana',
	user : 'root',
	password : ''
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('Prerana Database is connected Successfully');
	}
});

module.exports = connection;