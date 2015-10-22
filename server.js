var express = require('express')
    ,app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/view/home.html');
});

app.listen(3000);
console.log('Servidor rodando na porta 3000');
