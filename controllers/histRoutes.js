const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/searchhistory', async (req, res) => {
    //const results = searchresults

    try {
        // Get all search history results    

    res.render('searchhistory', {
        //results,
        logged_in: req.session.logged_in
    });
} catch (err) {
    res.status(500).json(err);
}
});