const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000; 

app.get('/', function (req, res) {
  res.send('Hello World with Express on The Web !')
})

console.log("hello from node server");

app.listen(PORT); 

