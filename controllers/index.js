const router = require('express').Router();

const auth = require('./web/auth');

router.use(auth);

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