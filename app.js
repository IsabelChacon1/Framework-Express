var express = require('express');
const { listen } = require('express/lib/application');
var app = express();

app.get('/', function(req, res){
    res.send('Hola mundo!');
});

app.listen(3000, function(){
    console.log('Aplicacion de ejemplo, escuchando el puerto 3000!');
});