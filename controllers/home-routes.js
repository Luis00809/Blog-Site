const router = require('express').Router();
const Blog = require('../models/Blog');
const Comment = require('../models/Comment');

// will display the homepage with all exitisting blog posts if there are any created
// gets all blogs

router.get('/', async (req, res) => {

    try{
        const blogData = await Blog.findAll({
            include: [{ model: Comment}],
        });
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        
        res.render('homepage', {
            blogs,
        });

        res.status(200);

    } catch (err) {
        console.log(err);
    res.status(500).json(err);
    }
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

        // res.render('TBA')
        res.status(200)

        // also need to change this route to a render method 
        // will insomnia work with this set up????

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;