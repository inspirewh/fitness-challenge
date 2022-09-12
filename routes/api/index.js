const router = require('express').Router();
const authRoutes = require('./authRoutes');
const homepageRoutes = require('../homepageRoutes')
const workoutRoutes = require('./workoutRoutes')
const progressRoutes = require('./progressRoutes')

router.use(authRoutes);
router.use(homepageRoutes);
router.use('/workout', workoutRoutes);
router.use('/progress', progressRoutes);


module.exports = router;