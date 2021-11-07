const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const histRoutes = require('./histRoutes')

 router.use('/', homeRoutes);
 router.use('/api', apiRoutes);
 router.use('/', histRoutes);

 module.exports = router;
