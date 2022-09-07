const router = require('express').Router();
const authRoutes = require('./authRoutes');
const homepageRoutes = require('../homepageRoutes')

const progressRoutes = require('./progressRoutes')
const workoutRoutes = require('./workoutRoutes')

router.use(authRoutes);
router.use(homepageRoutes);
router.use(progressRoutes);
router.use(workoutRoutes);

module.exports = router;