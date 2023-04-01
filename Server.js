const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to use Handlebars
app.set('view engine', 'hbs');

// Set the path to your views folder
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'static')));

// Define your routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Login Page' });
});
app.get('/register', (req, res) => {
    res.render('register', { title: 'Register page' });
  });
  app.get('/forgetpass', (req, res) => {
    res.render('forgetpass', { title: 'Forget page' });
  });

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
