const router = require('express').Router();
const userRoutes = require('./userRoutes');
const mailer = require('./mailer');

router.use('/users', userRoutes);
router.use('/mail', mailer);

module.exports = router;
