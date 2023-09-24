const router = require('express').Router();
const Blog = require('../../models/Blog');
const Comment = require('../../models/Comment');


router.get('/', async (req, res) => {

    try{
        const blogData = await Blog.findAll({
            include: [{ model: Comment}],
        });
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        
        // res.render('homepage', {
        //     blogs,
        // });
        
        res.status(200).json(blogs);

    } catch (err) {
        console.log(err);
    res.status(500).json(err);
    }
    
});

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [{ model: Comment}],
        });
        if (!blogData){
            res.status(404).json({message: "That blog doesn't exist!"});
            return;
        }

        const blog = blogData.get({ plain: true });

        // res.render('TBA')
        res.status(200).json(blog)

        // also need to change this route to a render method 
        // will insomnia work with this set up????

    } catch (err) {
        res.status(500).json(err)
    }
});


// create a blog
router.post('/', async (req, res) => {
    try {
        const blogData = await Blog.create(req.body);

    res.status(200).json(blogData);
        // will need to change to a render() later
    } catch (err) {
        res.status(400).json(err)
    }
});

// update a blog
// kinda works, when using on insomnia I get an error 
// but when I get all routes, the updated blog appears???
router.put('/:id', async (req, res) => {
    try {
    const blogData = await Blog.update(req.body, 
        {
            where: {
                id: req.params.id,
            },
        }
        );

        res.status(200).res.json(blogData);
        // will need to change to a render() later

    } catch (err) {
        res.status(500).json(err)
 
    }
})

module.exports = router;