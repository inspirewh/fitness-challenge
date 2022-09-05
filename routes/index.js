const router = require('express').Router();
const auth = require('./web/auth');
//const progress = require('./web/progress');

router.use(auth);
//router.use(progress);





module.exports = router;

