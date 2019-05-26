import { Router } from 'express'
import { getForoById } from '../routes/foro'

const foro = Router();

foro.get('/',(req,res) => {
  res.json({
    user: 'Vallugas esta cagando'
  });
});

foro.get('/:id',(req,res) => {
  const { params: id } = req;
  const foro = getForoById({id},null);
  res.json({
    foro
  })
})

module.exports = foro;