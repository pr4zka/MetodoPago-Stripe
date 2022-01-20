const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');


//INICIALIZACIONES
const app = express();


//SETINGS
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({

    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}));

app.set('view engine', '.hbs');



//MIDELWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//ROUTES
app.use(require('./routes/index'));



//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//START SERVER
app.listen(3000, () => {
    console.log('server on port', 3000);
});


