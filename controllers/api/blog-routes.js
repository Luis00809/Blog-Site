const router = require('express').Router();
const Blog = require('../../models/Blog');

// create a blog
router.post('/', async (req, res) => {
    try {
        const blogData = await Blog.create({
            title: req.params.title,
            description: req.body.description,
            user_Name: req.params.user_Name,
            date: req.params.date
        });

    res.status(200).json(blogData);
        // will need to change to a render() later
    } catch (err) {
        res.status(400).json(err)
    }
});

// update a blog
router.put('/:id', async (req, res) => {
    try {
    const blogData = await Blog.create({
        title: req.params.title,
        description: req.body.description,
        user_Name: req.params.user_Name,
        date: req.params.date,
        }, 
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