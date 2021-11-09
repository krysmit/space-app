const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/searchhistory', withAuth, async (req, res) => {
    try {
        const userData = await  User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Project }],
        });
        const user = userData.get({ plain: true});

        res.render('searchhistory', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//if already logged in, redirect the request
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/project');
        return;
    }
    res.render('login');
});

module.exports = router;