const express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = 3322;

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index.ejs'));

app.listen(port, () => {
   console.log('Server starting on port: ' + port);
});

// app.use(cors()); //прослойка для cors запросов
// app.use(bodyParser.json())


app.get('/index', function (req, res) {
   res.send('Home Page!');
});


app.use('/public', express.static(path.join(__dirname, 'public')));



app.post('/index', (req, res) => {
   res.send({ data: "Success" })
});


app.get('/', function (req, res) {
   res.send('Home Page!');
});

app.post('/index', (req, res) => {
   res.send("Success")
});

module.exports = app;