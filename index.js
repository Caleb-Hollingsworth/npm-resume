#! /usr/bin/env node

const fs = requre('fs');

fs.readFile(__dirname + './info.json', 'utf8', function (err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
		return data;
	}
});
