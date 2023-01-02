const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res) => {
  punkAPI
    .getBeers()
    .then(beers =>{
      res.render("beers", { beers })
    })
    .catch(error => next (error))
  })
  

app.get('/random-beer', (req, res) => {
  punkAPI
  .getRandom()
  .then(randomBeer => {
    res.render("random-beer", { randomBeer })
    })
  .catch(error => next (error));
});

app.listen(3003, () => console.log('🏃‍ on port 3003'));
