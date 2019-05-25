const { Router } = require('express');
const { getForoById } = require('../controllers/foro');
const foroRoute = Router();

foroRoute.get('/',(req,res) => {
  res.json({
    user: 'Vallugas esta cagando'
  });
});

foroRoute.get('/:id',(req,res) => {
  const { params: id } = req;
  const foro = getForoById({id},null);
  res.json({
    foro
  })
})

module.exports = foroRoute;