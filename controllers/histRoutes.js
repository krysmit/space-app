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

