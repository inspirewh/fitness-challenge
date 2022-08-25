const router = require('express').Router();

const auth = require('./web/auth');
const progress = require('./web/progress');

router.use(auth);
router.use(progress);


// this is for the workout week cards
const week_num = [
    {
        week: 'Week 1',
        src: './assets/css/Cardio Blast Thumbnail.jpg',
        href: './week/1',
        url_text: 'View Week 1',
        description:'week 1 text - Some quick example text to build on the card title and make up the bulk of the card content',
    },
    {
        week: 'Week 2',
        src: './assets/css/Cardio Blast Thumbnail.jpg',
        href: './week/2',
        url_text: 'View Week 2',
        description:'week 2 text - Some quick example text to build on the card title and make up the bulk of the card content',
    },
    {
        week: 'Week 3',
        src: './assets/css/Cardio Blast Thumbnail.jpg',
        href: './week/3',
        url_text: 'View Week 3',
        description:'week 3 text - Some quick example text to build on the card title and make up the bulk of the card content',
    },
    {
        week: 'Week 4',
        src: './assets/css/Cardio Blast Thumbnail.jpg',
        href: './week/4',
        url_text: 'View Week 4',
        description:'week 4 text - Some quick example text to build on the card title and make up the bulk of the card content',
    },
    {
        week: 'Week 5',
        src: './assets/css/Cardio Blast Thumbnail.jpg',
        href: './week/5',
        url_text: 'View Week 5',
        description:' week 5 text - Some quick example text to build on the card title and make up the bulk of the card content',
    },
    {
        week: 'Week 6',
        src: './assets/css/Cardio Blast Thumbnail.jpg',
        href: './week/6.html',
        url_text: 'View Week 6',
        description:'week 6 text - Some quick example text to build on the card title and make up the bulk of the card content',
    }
]

// Put this in the controller that sends back the homepage.handlebars



module.exports = router;

