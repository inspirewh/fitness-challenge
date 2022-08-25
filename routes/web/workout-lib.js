const router = require("..");

const workout_1 = [
    {
      workout_title: 'Workout 1',
      workout_header: 'Full Body Furnace | Time: 20 mins',
      description: 'FULL BODY Home Workout that is 20 minutes long including modified exercise options for all fitness levels',
      src: 'https://www.youtube.com/embed/ceJ7B46QPh4',
    },
  ];
    const workout_2 = [
    {
        workout_title: 'Workout 2',
        workout_header: 'Fat Burner | Time: 20 mins',
        description: 'Join us for a home workout that targets the full body, great for fat burn or increasing fitness.',
        src: 'https://www.youtube.com/embed/u2a9Kyqiyk8',
      },];
    
    const workout_3 = [
      {
        workout_title: 'Workout 3',
        workout_header: 'Fat Burner | Time: 20 mins',
        description: 'Ab workout at home, using no equipment and suitable for beginners (modified exercises included).',
        src: 'https://www.youtube.com/embed/dRmBeSbybec',
      },
    ];

    const workout_4 = [
      {
        workout_title: 'Workout 4',
        workout_header: 'Fat Burner | Time: 20 mins',
        description: '20 minute high intensity interval training to target your full body. Home workout that you can do anywhere.',
        src: 'https://www.youtube.com/embed/G7o5YOYxp60',
      },
    ];

    const workout_5 = [
      {
        workout_title: 'Workout 5',
        workout_header: 'Fat Burner | Time: 20 mins',
        description: 'A home workout to target fat burn and burn calories. Beginner friendly with modified exercises.',
        src: 'https://www.youtube.com/embed/XDAzFr7tzeI',
      },
    ];
    
    const workout_6 = [
    {
        workout_title: 'Workout 6',
        workout_header: 'Fat Burner | Time: 20 mins',
        description: 'This 20 minute LEGS WORKOUT targets your lower body to help tone, burn fat and shape your legs.',
        src: 'https://www.youtube.com/embed/Vx8g_lCFlmI',
      },
    ];

    const workout_7 = [
      {
        workout_title: 'Workout 7',
        workout_header: 'Fat Burner | Time: 20 mins',
        description: 'Full body home hiit workout to target fat burn and improve fitness.',
        src: 'https://www.youtube.com/embed/U2srs0E2mmQ',
      },
    ];

    const workout_8 = [
      {
        workout_title: 'Workout 8',
        workout_header: 'Fat Burner | Time: 20 mins',
        description: 'Abs workout that you can do at home, in the gym or anywhere you like because it is equipment free.',
        src: 'https://www.youtube.com/embed/mlXd26GgnBg',
      },
    ];
    
    const workout_9 = [
      {
        workout_title: 'Workout 9',
        workout_header: 'Fat Burner | Time: 20 mins',
        description: 'Join me for a Full body home workout. Beginner friendly with modified exercises.',
        src: 'https://www.youtube.com/embed/uPBxQ9qA6-I',
      },
    ];

    const workout_10 = [
      {
        workout_title: 'Workout 10',
        workout_header: 'Fat Burner | Time: 20 mins',
        description: 'Full Body Workout at home, beginner friendly, modified exercises option, 20 minute workout that targets fat burn.',
        src: 'https://www.youtube.com/embed/tXUC9VqGBDE',
      },
    ];

//get individual workout on their respective page e.g workout 1 on workout 1.handlebar

  router.get('/workout1', async (req, res) => {
    res.render('workout_1');
  });

  res.render('workout1', workout_1);

  router.get('/workout2', async (req, res) => {
    res.render('workout_2');
  });

  res.render('workout1', workout_2);