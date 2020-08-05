#! /usr/bin/env node

const fs = require('fs');
var colors = require('colors');

fs.readFile(__dirname + '/info.json', 'utf8', function (err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data.america);
		return data;
	}
});
