const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname); // NEW
const HTML_FILE = path.join(__dirname, 'index.html'); // NEW
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};
app.use(express.static(DIST_DIR));
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/*', (req, res) => {
 res.sendFile(HTML_FILE);
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
