const router = require('express').Router();
const Blog = require('../../models/Blog');

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