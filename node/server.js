/**
 * @author  https://github.com/silence717
 * @date on 2017/3/1
 */
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
	// flush layout and assets
	var layoutHtml = fs.readFileSync(__dirname + "/layout.html").toString();
	res.write(layoutHtml);

	// fetch data and render
	res.write('<script>renderFlushCon("#A","moduleA");</script>');
	res.write('<script>renderFlushCon("#C","moduleC");</script>');
	res.write('<script>renderFlushCon("#B","moduleB");</script>');

	// close body and html tags
	res.write('</body></html>');
	// finish the response
	res.end();
});

app.listen(3000);