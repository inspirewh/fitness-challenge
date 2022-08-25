const router = require('express').Router();

//contain authentication routes


//login page

router.get('/login', (req, res) => {
    res.render("login")
})

//post login request (for user to login) - action end point for login
    //login the user


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
        res.status(400).render('login', {
            email: 'Incorrect credentials, please check your email or password' 
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



//sign up page

//post request for user to sign up