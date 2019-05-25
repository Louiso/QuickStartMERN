const { Router } = require('express');
const api = Router();

api.use('/user', require('./user'));
api.use('/foro',require('./foro'));
module.exports = api;