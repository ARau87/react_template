const {User} = require('../db/models');

module.exports = app => {

    app.post('/api/v1/login', (req, res) => {

        if(req.body.email && req.body.password ){

            User.findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })
            .then(user => {
                if(user){
                    req.session.user = user.dataValues.email;
                    res.status(202).send('User found!');
                }
                else {
                    res.status(404).send('User not found!');
                }
            })
            .catch(err => {
                res.status(400).send('Bad request!');
            });

        }

        else {
            res.status(400).send('Bad request!');
        }

    });

    app.post('/api/v1/register', (req, res) => {


        if(req.body.email && req.body.password && req.body.firstname && req.body.lastname){

            User.create({
                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname
            })
            .then(() => {
                req.session.user = req.body.email;
                res.status(201).send('User created');
            })
            .catch((err) => {
                res.status(400).send('Bad request');
            });


        }
        else {
            res.status(400).send('Bad request');
        }

    });

    app.post('/api/v1/logout', (req, res) => {

        req.session.user = '';
        res.status(200).send('User logged out!');
    });

    app.get('/api/v1/user/current', (req, res) => {

        if(req.session.user){
            res.status(200).send(req.session.user);
        }
        else {
            res.status(404).send('User not logged in!');
        }

    });





}