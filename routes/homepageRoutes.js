const router = require('express').Router();
const { User, Workout, Week, Progress} = require('../models');


//contain authentication routes
router.get('/signup', (req, res) => {
  res.render('signup', {layout: 'fullpage'})
  
});

//create user
router.post('/users', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//login page > render login.handlebars
router.get('/login', (req, res) => {
    res.render('login', {layout: 'fullpage'})
    
});


//post login request (for user to login) - action end point for login
    //login the user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
        res.status(400).render('login', {
            error: 'Incorrect credentials, please check your email or password' 
        });
      
        return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .render('login', {
            email: 'Incorrect credentials, please check your email or password' 
        });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.redirect('/');
    });

  } catch (err) {
    res.status(400).render('login', {
      email: 'Incorrect credentials, please check your email or password' 
  });
  }
})


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// route to get all workouts to workout library
router.get('/library', async (req, res) => {
  const workoutListData = await Workout.findAll().catch((err) => { 
      res.json(err);
    });
    console.log(req.session.logged_in)
      const workoutList = workoutListData.map((workout) => workout.get({ plain: true }));
      res.render('workout-library', { workoutList, loggedIn:req.session.logged_in });
    });

//get one workout by ID
router.get('/workout/:id', async (req, res) => {
    try{ 
        const workoutData = await Workout.findByPk(req.params.id);
        if(!workoutData) {
            res.status(404).json({message: 'No workout with this id!'});
            return;
        }
        const workout = workoutData.get({ plain: true });
        console.log(workout)
        res.render('workout-individual', {workout, layout: 'mininav',
          loggedIn: req.session.logged_in,
        });
      } catch (err) {
          res.status(500).json(err);
      };     
  });


// route to get all progress forms on congratulations page 
router.get('/progress', async (req, res) => {
  const progresslistData = await Progress.findAll().catch((err) => { 
      res.json(err);
    });
      const progressList = progresslistData.map((progress) => progress.get({ plain: true }));
      res.render('progress', { progressList });
    });


// Get all workouts for the weekly pages
router.get("/week/:num", async (req, res, next) => {
    // Get all workouts in workout table >> if have time split workouts 1-5 on odd week and 6-10 on even weeks
    try {
      const workouts = await Workout.findAll({
        raw: true,
        nest: true,
      });
  
      res.render("workouts", {
        loggedIn: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

  //get one workout by ID
router.get('/workout/:id', async (req, res) => {
    try{ 
        const workoutData = await Workout.findByPk(req.params.id);
        if(!workoutData) {
            res.status(404).json({message: 'No workout with this id!'});
            return;
        }
        const workout = workoutData.get({ plain: true });
        console.log(workout)
        res.render('workout-individual', {workout, layout: 'mininav',
          loggedIn: req.session.logged_in,
        });
      } catch (err) {
          res.status(500).json(err);
      };     
  });


// route to get all weeks to main homepage
router.get('/', async (req, res) => {
  const weekListData = await Week.findAll().catch((err) => { 
      res.json(err);
    });
      const weekList = weekListData.map((week) => week.get({ plain: true }));
      res.render('homepage', { weekList, logged_in: req.session.logged_in });
    });


  



module.exports = router;