const Progress = require('../..models/Progress');
const router = require('expresss').Router();

// when the user visits the homepage render to show each week depending on how many progrerss forms have been completed


/// create 

// post request to handle progress form submission


//  get the data from the req , burpees, pushups ....

//  user_id ( get from req. session)
router.get('/', async(req,res) =>{
    
    const progresses = await Progress.findAll(user_id = req.session.user_id);
    res.render('home', {
        progresses: progresses.get({plain: true})
    })
})

//for (let i = 0; i < progresses.length; index++) {
 //   const week_num = array[index];
 //   for (let i = 0; )
//}

// week_num 
// get all the user progresses 
// (Progress.findAll( where user_id = req.session.userId )) --- >progresses




// week num -> progresses' length + 1





///homepages
// we should have all the user's progresses
// problem is: determine which workout week to show
// find out the largest week num

// const weekNUm = 5;

//{{#if workoutWeek < weekNum}}
//<button>Done</button>

// eg if largest week is 4, that means you want to show week 5

module.exports = router