const {EntryType, User} = require('../db/models');

module.exports = app => {

    app.post('/api/v1/entrytype', (req, res) => {

        if(req.session.user){

            User.findOne({
                where: {
                    email: req.session.user
                }
            })
            .then(user => {

                if(req.body.name && req.body.unit){

                    EntryType.create({
                        name: req.body.name,
                        unit: req.body.unit
                    })
                    .then(() => {
                        res.status(201).send('Entrytype created!');
                    })
                    .catch(() => {
                        res.status(500).send('Internal server error!');
                    })

                }

                else {
                    res.status(400).send('Bad request!');
                }

            })
            .catch((err) => {
                res.status(404).send('User not found!');
            })


        }

        else {

            res.status(401).send('Forbidden');

        }

    })

}