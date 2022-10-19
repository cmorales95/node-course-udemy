import path from 'path';

import * as dotenv from 'dotenv';
import express from 'express';
import hbs from 'hbs';

dotenv.config()

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Cristian Morales',
    title: 'Home'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Cristian Morales',
    title: 'Generics'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    name: 'Cristian Morales',
    title: 'Elements'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
