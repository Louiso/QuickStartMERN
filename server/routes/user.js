const { Router } = require('express');

const userRoute = Router();

userRoute.get('/',(req,res) => {
  res.json({
    user: 'Vallugas esta cagando'
  });
});

userRoute.get('/:id',(req,res) => {
  res.json({
    userID: req.params.id
  })
})

module.exports = userRoute;