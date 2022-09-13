const router = require('express').Router();
const { restart } = require('nodemon');
const { Progress } = require('../../models');

// when the user visits the homepage render to show each week depending on how many progrerss forms have been completed


/// create 

//  get the data from the req , burpees, pushups ....

//  user_id ( get from req. session)
router.get('/', async(req,res) =>{
    
const progresses = await Progress.findOne({ where: { user_id: req.session.user_id }})
console.log(progresses)
  res.render('home', {
  progresses: progresses.get({plain: true})
})
})

//create api route to post
// post request to handle progress form submission
router.post('/', async(req,res) =>{
  const postProgress = await Progress.create({
    pushups: req.body.pushups,
    burpees: req.body.burpees,
    situps: req.body.situps,
    user_id: req.session.user_id,
  })
  res.json(postProgress);
})




module.exports = router