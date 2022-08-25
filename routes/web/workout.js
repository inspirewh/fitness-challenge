const router = require("..");

const workouts1_5 = [
    {
      workout_title: 'Workout 1',
      description: 'FULL BODY Home Workout that is 20 minutes long including modified exercise options for all fitness levels',
      src: 'https://www.youtube.com/embed/ceJ7B46QPh4',
      href:'views/workout1.handlebars'
    },
    {
        workout_title: 'Workout 2',
        description: 'Join us for a home workout that targets the full body, great for fat burn or increasing fitness.',
        src: 'https://www.youtube.com/embed/u2a9Kyqiyk8',
        href:'views/workout2.handlebars'
      },
      {
        workout_title: 'Workout 3',
        description: 'Ab workout at home, using no equipment and suitable for beginners (modified exercises included).',
        src: 'https://www.youtube.com/embed/dRmBeSbybec',
        href:'views/workout3.handlebars'
      },
      {
        workout_title: 'Workout 4',
        description: '20 minute high intensity interval training to target your full body. Home workout that you can do anywhere.',
        src: 'https://www.youtube.com/embed/G7o5YOYxp60',
        href:'views/workout4.handlebars'
      },
      {
        workout_title: 'Workout 5',
        description: 'A home workout to target fat burn and burn calories. Beginner friendly with modified exercises.',
        src: 'https://www.youtube.com/embed/XDAzFr7tzeI',
        href:'views/workout5.handlebars'
      },

  ];

  const workouts6_10 = [
    {
        workout_title: 'Workout 6',
        description: 'This 20 minute LEGS WORKOUT targets your lower body to help tone, burn fat and shape your legs.',
        src: 'https://www.youtube.com/embed/Vx8g_lCFlmI',
        href:'views/workout6.handlebars'
      },
      {
        workout_title: 'Workout 7',
        description: 'Full body home hiit workout to target fat burn and improve fitness.',
        src: 'https://www.youtube.com/embed/U2srs0E2mmQ',
        href:'views/workout7.handlebars'
      },
      {
        workout_title: 'Workout 8',
        description: 'Abs workout that you can do at home, in the gym or anywhere you like because it is equipment free.',
        src: 'https://www.youtube.com/embed/mlXd26GgnBg',
        href:'views/workout8.handlebars'
      },
      {
        workout_title: 'Workout 9',
        description: 'Join me for a Full body home workout. Beginner friendly with modified exercises.',
        src: 'https://www.youtube.com/embed/uPBxQ9qA6-I',
        href:'views/workout9.handlebars'
      },
      {
        workout_title: 'Workout 10',
        description: 'Full Body Workout at home, beginner friendly, modified exercises option, 20 minute workout that targets fat burn.',
        src: 'https://www.youtube.com/embed/tXUC9VqGBDE',
        href:'views/workout10.handlebars'
      },
    
  ];

//get all the workouts

  router.get('/', async (req, res) => {
    res.render('all');
  });

//get workout  
  router.get('/workout/:num', async (req, res) => {
    const workout_a = workouts1_5[req.params.num - 1]; //model
    const workout_b = workouts6_10[req.params.num - 1]; //model

//reder workout template, select correct workout to render in the remplate based on ID of the workout
    res.render('workout', workout_a); // view
    res.render('workout', workout_b); //view

  })

  module.exports = router;