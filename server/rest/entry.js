const {UsageEntry,User,EntryType} = require('../db/models');

module.exports = app => {

    app.post('/api/v1/entry', (req,res) => {

        if(req.session.user){

                User.findOne({
                    where: {
                        email: req.session.user
                    }
                })
                .then(user => {
    
                    if(req.body.value && req.body.month && req.body.entrytype){

                        UsageEntry.create({
                            value: req.body.value,
                            month: req.body.month,
                            details: req.body.details || '',
                            userId: user.dataValues.id,
                            entrytypeId: req.body.entrytype

                        }, {include: [User, EntryType]})
                        .then(() => {
                            res.status(201).send('Entry created!');
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(500).send('Internal server error!');
                        });
    
                    }
    
                    else {
                        res.status(400).send('Bad request!');
                    }
    
                })
                .catch((err) => {
                    console.log(err);
                    res.status(404).send('User not found!');
                })
            
        }
        else {
            res.status(401).send('Forbidden');
        }

    });

    app.get('/api/v1/entries', (req,res) => {

        if(req.session.user){
            User.findOne({
                email: req.session.user
            }, {include: [UsageEntry]})
            .then(user => {
                return user.getEntries();
            })
            .then(users => {

                res.status(200).send(users);
            })
            .catch(err => {
                console.log(err);
                res.status(500).send('Internal server error!');
            })
        }
        else {
            res.status(401).send('Forbidden!');
        }

    })

}