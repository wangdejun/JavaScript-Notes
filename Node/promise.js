var Promise = require("bluebird");
var join = Promise.join;
var fs = Promise.promisifyAll(require("fs"));
var concurrency = parseFloat(process.argv[2] || "Infinity");

var fileNames = ["file1.json", "file2.json"];
Promise.map(fileNames, function(fileName) {
	return fs.readFileAsync(fileName)
	    .then(JSON.parse)
	    .catch(SyntaxError, function(e) {
		    e.fileName = fileName;
		    throw e;
		})
	    }, {concurrency: concurrency}).then(function(parsedJSONs) {
		    console.log(parsedJSONs);
		}).catch(SyntaxError, function(e) {
			console.log("Invalid JSON in file " + e.fileName + ": " + e.message);
		    })