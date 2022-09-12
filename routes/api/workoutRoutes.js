const router = require("express").Router();
const { Workout, Week } = require('../../models');

// route to create/add a workout using async/await
router.post('/', async (req, res) => {
  try { 
    const weekData = await Week.create({
    number: req.body.number,
    image: req.body.image,
    description: req.body.description,
  });
  // if the week is successfully created, the new response will be returned as json
  res.status(200).json(weekData)
} catch (err) {
  res.status(400).json(err);
}
});


// route to create/add a workout using async/await
router.post('/workout', async (req, res) => {
  try { 
    const workoutData = await Workout.create({
    workout_num: req.body.workout_num,
    workout_title: req.body.workout_title,
    workout_description: req.body.workout_description,
    youtube: req.body.youtube,
  });
  // if the workout is successfully created, the new response will be returned as json
  res.status(200).json(workoutData)
} catch (err) {
  res.status(400).json(err);
}
});

router.put('/:id', async (req, res) => {
  try {
    const workout = await Workout.update(
      {
        workout_num: req.body.workout_num,
        workout_title: req.body.workout_title,
        workout_description: req.body.workout_description,
        youtube: req.body.youtube,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(workout);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;





//router.get('/workout/:id', (req, res) => {
  //res.render('workouts', {layout: 'mininav'})
  
//});

//get individual workout on their respective page e.g workout 1 on workout 1.handlebar
//router.get("/workout/:id", async (req, res, next) => {
  //try {
    //getting workout by parrameter
    //const workout = await Workout.findByPk(req.params.id, {
      //raw: true,
      //nest: true,
    //});

    // //render to handlebars 
    //res.render("workout-page", {workout, layout: 'mininav',
      //loggedIn: req.session.loggedIn,
    //});
  //} catch (error) {
    //res.status(500).json(error);
    //console.log(error);
 // }
//});




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