const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const api = require('./routes');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(api)

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});