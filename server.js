const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/',  (request, respond) => {
  // do something here
   
})

app.post('/quotes',(request,respond) => {
  // do something here
  respond.sendFile(__dirname + '/index.html')
  console.log(request.body)
  
})

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  // ... do something here
  if (err) return console.error(err)
  console.log('Connected to Database')
})

app.listen(3000, function () {
  console.log('listening on 3000')
 })