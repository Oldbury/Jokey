const express = require('express'); 
const { RandomJoke, jokeByType } = require('./handlers/jokeHandler');
const app = express(); 
const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Listening on port ${port}`)); 

// Get routes
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});

app.get('/randomJoke', (req, res) => {
  res.send({joke: RandomJoke()})
})

app.get('/jokes/:type', (req, res) => {
  res.json(jokeByType(req.params.type));
});