var connection = require('./connection.js');

var orm = {
	all: function(tableInput, cb){
		connection.query('SELECT * FROM '+ tableInput + ',' , function(err, result){
			if (err)throw err;
			cb(result)
		})
	},

	update: function(tableInput, condition, cb){
		connection.query('PDATE ' + tableInput+ 'SET eatentrue WHERE id='+ condition ';', function(err,result){
			if (err)throw err;
			cb(result);
		})
	},

	create: function(table,val,cb){
		connection,query('INSERT INTO '+ tableInput + "(burger_name)VALUES ("+val+");", function(err,result){
			if (err)throw err;
			cb(result);
		})
	}
}
module.exports=orm