var express = require('express')
    ,app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/view/home.html');
});

app.listen(process.env.PORT 5000);
