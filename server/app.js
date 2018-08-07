const express = require('express');
const app = express();
const path = require('path');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./db');


// Configure cookie sessions
app.use(cookieParser());
app.use(cookieSession({
    name: 'session',
    keys: ['oiwefhiuwehfiu', 'aEZFGUZQEGFZUQWG'],
    maxAge: 24 * 60 * 60 * 1000
}));

// Setup the database
db.init();

// Middleware
app.use('/', express.static(path.join(__dirname, '../client/dist/client')));
app.use(bodyParser.json());

// App properties
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/dist/client'));

// Routes
app.get('/', (req,res) => {
    res.render('index');
});

// Import rest api
require('./rest')(app);

module.exports = app;