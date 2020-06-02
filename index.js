const express = require('express');
const cors = require('cors');

const pool = require('./db');

const app = express();
//
app.use(cors());
app.use(express.json());

//Routes

//create a todo

app.post('/todos', async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

// get all todo

//update a todo

app.listen(5000, () => {
  console.log('server is starting on');
});
