var express = require('express')
    ,app = express();

app.get('/', function (res, req) {
  res.sendFile('view/home.html');
});
