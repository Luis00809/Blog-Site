const router = require('express').Router();
const User = require('../../models/User');
const { param } = require('./blog-routes');

// creates a new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body)
            
        // req.session.save(() => {
        //     req.session.loggedIn = true;

        //     res.status(200).json(userData);
        // })
        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});


// updates an exisiting user
router.put('/:id', async (req, res) => {
    try{
        const userData = await User.update(req.body, {
        where: {
            id: req.params.id,
        }, 
        individualHooks: true
        });

        if(!userData) {
            res.status(404).json({ message: "No user with this id"});
            return;
        };

        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);

    }
})

module.exports = router;