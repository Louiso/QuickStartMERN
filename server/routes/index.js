import { Router } from 'express'
import user from './user'
import foro from './foro'

const api = Router();

api.use('/user', user);
api.use('/foro', foro);
module.exports = api;