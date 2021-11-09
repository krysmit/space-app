const router = require('express').Router();
const userRoutes = require('./userRoutes');
const mailer = require('./mailer');
// const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);
router.use('/mail', mailer);

module.exports = router;
