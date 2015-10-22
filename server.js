var express = require('express')
    ,app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/view/home.html');
});

app.listen(5000);
console.log('Servidor rodando na porta 5000');
