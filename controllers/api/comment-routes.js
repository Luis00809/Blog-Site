const router = require('express').Router();
const Comment = require('../../models/Comment');
const Blog = require('../../models/Blog');

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            description: req.body.description,
            username: req.body.username,
            blog_id: req.body.blog_id
        });
        res.status(200).json(commentData);
        
    } catch (err) {
        res.status(400).json(err) 
    }
});

router.get('/', async (req, res) => {
    try {

       const commentData = await Comment.findAll({
        include: [{ model: Blog}]
       }); 
       res.status(200).json(commentData);
       
    } catch (err) {
        res.status(500).json(err) 
        console.log(err);
    }
});

router.put('/:id', async (req, res) => {
    try{

        const commentData = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(commentData);

    } catch (err) {
        res.status(500).json(err);

    };
});

module.exports = router;