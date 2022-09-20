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

module.exports = router;