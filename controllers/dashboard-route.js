const router = require('express').Router();
const Blog = require('../models/Blog');
const Comment = require('../models/Comment');
const authenticate = require('../utils/auth');
const User = require('../models/User');

router.get('/user/:id', authenticate, async (req,res) => {
    try {

        // should be all blogs with associated comments

        const userData = await Blog.findAll({
            where: {
                user_id: req.session.userId
            },
            include: [{ model: User }],
            
        });
        const userInput = userData.map((data) => data.get({ plain: true }));

        res.render('Dashboard', {
            userInput,
            loggedIn: req.session.loggedIn,
        });
        res.status(200);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;