const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const port = 3322;

app.listen(port, () => {
   console.log('Server starting on port: ' + port);
});

app.use(cors()); //прослойка для cors запросов
app.use(bodyParser.json())


app.get('/index', function(req, res) {
   res.send('Home Page!');
});



app.post('/index', (req, res) => {
   res.send({data: "Success"})
});


app.get('/', function (req, res) {
	res.send('Home Page!');
});

app.post('/index', (req, res) => {
	res.send("Success")
});

