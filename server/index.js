import express  from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import routes from './routes'
import config from './config'
// const mongoose = require('mongoose');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log(config.client.http.getUri());
app.use(cors({
  origin: config.client.http.getUri()
}))
app.use(routes)

const PORT = process.env.BACKEND_PORT;

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});