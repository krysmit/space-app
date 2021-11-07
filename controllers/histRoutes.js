const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/searchhistory', async (req, res) => {
    try {
        // Get all search history results 
        const projectData = await Project.findAll({
            include: [
                {
                model: Project,
                    attributes: ['city'],
                },
            ],
        });

        const projects = projectData.map((project) => project.get({ plain: true }));

    res.render('searchhistory', {
        //results,
        logged_in: req.session.logged_in
    });

} catch (err) {
    res.status(500).json(err);
}
});


//middleware
router.get('/searchhistory', withAuth, async (req, res) => {
    try {
        const userData = await  Project.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Project }],
        });
        const user = userData.get({ plain: true});

        res.render('project', {
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