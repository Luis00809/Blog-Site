const router = require('express').Router();
const Blog = require('../models/Blog');
const Comment = require('../models/Comment');

router.get('/user', async (req,res) => {
    try {

        // should be all blogs with associated comments
        // still need to create the association between blogs and comments
        // will add the include and then "where:" later when set up

        const userData = await Blog.findAll();
        const userInput = userData.map((data) => data.get({ plain: true }));

        res.render('Dashboard', {
            userInput,
        });
        res.status(200);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;