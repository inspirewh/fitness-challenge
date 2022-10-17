const router = require('express').Router();
const { User } = require('../../models');



//contain authentication routes
router.get('/signup', (req, res) => {
  res.render('signup', {layout: 'fullpage'})
  
});

//create user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.name = userData.name;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//login page > render login.handlebars
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
    res.redirect('/');
    return;
    }
    res.render('login', {layout: 'fullpage'})
    
});







module.exports = router;