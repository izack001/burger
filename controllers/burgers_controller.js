var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req.res){
	burger.all(function(burger.data){
		console.log(burger_data);
		res.render('index',{burger_data});
	})
	
})

router.put('./burgers/update',function(req, res){
	burger.update(req.body.burger_id, function(result){
		console.log(result);
		res.redirect('/');
	});
});

create: function(tableInput,val,cb ){
	connection.query('INSERT INTO'+ tableInput+"(burger_name)VALUES("+val+");", function(err,result){
		if(err)throw err;
		cb(result);
	})
}

module.exports = router;


