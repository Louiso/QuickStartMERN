import { Router } from 'express'

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

export default userRoute;