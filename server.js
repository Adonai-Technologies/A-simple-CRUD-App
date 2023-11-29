// using express in server.js by requiring it.

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
// We need to create a server that browsers can connect to. We do this by using the Express’s listen method.
app.listen(3000, function () {
  console.log('listening on 3000')
})

// We normally abbreviate `request` to `req` and `response` to `res`.
// Next, let’s change server.js so we serve up an index.html page back to the browser. 
// To do this, we use the sendFile method that’s provided by the res object.

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
})

// The urlencoded method within body-parser tells body-parser 
// to extract data from the <form> element and add them to the body property in the request object.
app.post('/quotes', (req, res) => {
  console.log('Heavenooooooooooooooooo!')
  console.log(req.body)
})

// Great, we know that Express is handling the form for us right now. 
// The next question is, how do we get the input values with Express?
