const router = require('express').Router();

const auth = require('./web/auth');
const progress = require('./web/progress');

router.use(auth);
router.use(progress);

module.exports = router;


// Put this in the controller that sends back the homepage.handlebars
// this is for the workout week cards
// [
//     {
//       title: "Week 1",
//       src: '....',
//       href: "...."
    
//     },
//     {
    
//     }
//     ]