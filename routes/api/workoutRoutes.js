const router = require("express").Router();
const { raw } = require("express");
const { Workout } = require('../../models');

// Get all workouts for the weekly pages
router.get("/week/:num", async (req, res, next) => {
  // Get all workouts in workout table >> if have time split workouts 1-5 on odd week and 6-10 on even weeks
  try {
    const workouts = await Workout.findAll({
      raw: true,
      nest: true,
    });

    res.render("workouts", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/workout/:id', (req, res) => {
  res.render('workouts', {layout: 'mininav'})
  
});

//get individual workout on their respective page e.g workout 1 on workout 1.handlebar
router.get("/workout/:id", async (req, res, next) => {
  try {
    //getting workout by parrameter
    const workout = await Workout.findByPk(req.params.id, {
      raw: true,
      nest: true,
    });

    // //render to handlebars 
    res.render("workout-page", {layout: 'mininav',
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});




//router.get('/workout/:num', async (req, res) => {

  //try {
    //const workoutNum = await res.render('workout', Workout[req.params.num - 1]);
  
    //needs validation - in case the parameter is not a number
    //if (workoutNum === null){
      //res.json({
        //error: "You have entered an invalid workout number, please try again"
      //})
    //} else {
     // res.json(workoutNum);
    //}
  //} catch (err) {
    //handleError500(res)(err);
    //console.log(err)
  //}
//});


//router.get('/workout/:num', async (req, res) => {
  //return res.render('workout', workouts[req.params.num - 1]);
  //});

  module.exports = router;