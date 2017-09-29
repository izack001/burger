
var orm = require('../config/orm.js');

var burger = {
	all: function(cb){
		orm.all('burgers', function(res){

		})
	},

	update: function(id,cb){
		orm.update('burgers',id)
	},

	create: function(name,cb){
		orm.create('burgers', name, cb);
	}
}

module.exports = burgers;