// const http = require('http');
// const PORT = 3322;
// const server = http.createServer(function(req, res) {
//    console.log('Request URL :' + req.url);

// // Формирование заголовков ответа сервера	
//    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

// // отправка тела ответа сервера
//    res.end('Response from server: Success');
// });

// server.listen(PORT);
// console.log('Starting server on port ' + PORT);

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

