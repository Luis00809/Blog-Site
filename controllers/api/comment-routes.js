const router = require('express').Router();
const res = require('express/lib/response');
const Comment = require('../../models/Comment');

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            description: req.body.description,
            username: req.body.username,
        });
        res.status(200).json(commentData);

    } catch (err) {
        res.status(400).json(err) 
    }
});

router.get('/', async (req, res) => {
    try {

       const commentData = await Comment.findAll(); 
       res.status(200).json(commentData);
       
    } catch (err) {
        res.status(500).json(err) 
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