"use strict";

//This file is mocking a web API by hitting hard coded data.
var titans = require('./titanData').titans;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
// var _generateId = function(titan) {
// 	return titan.firstName.toLowerCase() + '-' + titan.lastName.toLowerCase();
// };

// var _clone = function(item) {
// 	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
// };

var TitanApi = {
	getAllTitans: function() {
		return _clone(titans); 
	},

	getTitanById: function(id) {
		var titan = _.find(titans, {id: id});
		return _clone(titan);
	},
	
	saveTitan: function(titan) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the titan to the DB via AJAX call...');
		
		if (titan.id) {
			var existingtitanIndex = _.indexOf(titans, _.find(titans, {id: titan.id})); 
			titans.splice(existingtitanIndex, 1, titan);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new titans in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			titan.id = _generateId(titan);
			titans.push(titan);
		}

		return _clone(titan);
	},

	deleteTitan: function(id) {
		console.log('Pretend this just deleted the titan from the DB via an AJAX call...');
		_.remove(titans, { id: id});
	}
};

module.exports = TitanApi;