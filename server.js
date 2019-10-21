const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Diana Rodriguez'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});
 
//app.get('/', function (req, res) {
 // res.send('<h1>Hola Diana ');
 //let salida = {
 //    nombre: 'Diana Rodriguez',
 //   edad: 18,
  //   url: req.url
 //};

 //   res.send(salida);
// });

//app.get('/hola', (req, res) => {
//   res.send('Estas en /hola');
//});
 
app.listen(port, () => {
    console.log('Escuchando por el puerto', port);
});