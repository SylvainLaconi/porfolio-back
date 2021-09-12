const express = require('express');
const cors = require('cors');

const app = express();
const worksRouter = require('./routes/works');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO: configure cors
app.use(cors());

// TODO: add your routes here
app.get('/', (req, res) => {
  res.send('Welcome to my portfolio API');
});
app.use('/api/works', worksRouter);

module.exports = app;
