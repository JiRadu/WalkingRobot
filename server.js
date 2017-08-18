var express = require('express');
var request = require('request');



var app = express();

app.use(express.static('public'));

app.get('/getValues', function(req, res) {
  var response = res;
  request.get('http://192.168.11.127/', {}, function(err, res, body) {
    if (err) {
      res.status(500).send();
    } else {
      response.send(body);
    }
  });
});
app.listen(3000, function(err) {
  if (!err) {
    console.log('Ok');
  }
});
