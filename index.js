const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const port = process.env.PORT || 3000;

app.set('port',port);
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

fakeApi = () => {
  return [
    {
      name: 'Katarina',
      lane: 'midlaner'
    },
    {
      name: 'Jayce',
      lane: 'toplaner'
    }, 
    {
      name: 'Azir',
      lane: 'midlaner'
    }
  ];
}

app.get('/', (req, res) => {
    res.render('index', {layout: 'main', suggestedChamps: fakeApi(), listExists: true});
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(app.get('port'), () => {
  console.log('Servidor en puerto ', port);
});
