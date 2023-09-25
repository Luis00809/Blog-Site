const router = require('express').Router();
const User = require('../../models/User');


// create a new user
router.post('/signUp', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
        // res.json(userData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// for logging in
router.post('/login', async (req, res) => {
    try {

        const userData = await User.findOne({
            where: {
                email: req.body.email
            },
        });

        if (!userData) {
            res.status(400).json({message: 'Incorrect email or password. Please try again!'});
            return;
        }

        const trueUser = await userData.checkPassword(req.body.password);

        if (!trueUser) {
            res.status(400).json({message: 'Incorrect email or password. Please try again!'});
            return;
        };

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({ user: userData, message: 'Logged in!'});

        });


    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


router.get('/allUsers', async (req, res) => {
    try{
        const users = await User.findAll();
        res.json(users);

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})
module.exports = router;