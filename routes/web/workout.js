const router = require('express').Router();
const { Workout } = require('../models');


//get individual workout on their respective page e.g workout 1 on workout 1.handlebar
router.get('/workout/:num', async (req, res) => {

  try {
    const workoutNum = await res.render('workout', workouts[req.params.num - 1]);
  
    //needs validation - in case the parameter is not a number
    if (workoutNum === null){
      res.json({
        error: "You have entered an invalid workout number, please try again"
      })
    } else {
      res.json(workoutNum);
    }
  } catch (err) {
    handleError500(res)(err);
    console.log(err)
  }
});

router.get('/week/:num')

//router.get('/workout/:num', async (req, res) => {
  //return res.render('workout', workouts[req.params.num - 1]);
//});