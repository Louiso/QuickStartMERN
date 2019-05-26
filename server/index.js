import express  from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import routes from './routes'
import config from './config'
import path from 'path'
// const mongoose = require('mongoose');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if(process.env.NODE_ENV==='prod'){
  app.use(express.static(path.resolve(__dirname,'../build')));
  
  app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'../build/index.html'));
  });
}else{
  app.use(cors({
    origin: config.client.http.getUri()
  }))
}
app.use('/api',routes)

const PORT = process.env.REACT_APP_BACKEND_PORT;

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});