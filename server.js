
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

// Make sure you place body-parser before your CRUD handlers!



// All your handlers here...
MongoClient.connect('mongodb+srv://ADO-Tech:akuakonadu@cluster0.nuwvfup.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('My simple CRUD App')
    
    const quotesCollection = db.collection('quotes')

    app.use(bodyParser.urlencoded({ extended: true }))
    
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
       
    })
    
    
    app.post('/quotes', (req, res) => {
        console.log(req.body)
    })
    
    
    app.listen(3000, function () {
        console.log('listening on 3000')
    })
     
  })
  .catch(error => console.error(error))
