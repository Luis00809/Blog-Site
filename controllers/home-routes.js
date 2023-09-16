const router = require('express').Router();
const Blog = require('../models/Blog');

// will display the homepage with all exitisting blog posts if there are any created
// gets all blogs

// works in insomnia
router.get('/', async (req, res) => {
    const blogData = await Blog.findAll().catch((err) => {
        res.json(err);
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.status(200).json(blogs);
    // will need to change to display handlebars later 
    // for now using for making sure routes work
});


// get blog by id

// works in insomnia
router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id);
        if (!blogData){
            res.status(404).json({message: "That blog doesn't exist!"});
            return;
        }

        const blog = blogData.get({ plain: true });
        res.status(200).json(blog);

        // also need to change this route to a render method 
        // will insomnia work with this set up????

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;