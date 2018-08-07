module.exports = app => {

    require('./auth')(app);
    require('./entrytype')(app);
    require('./entry')(app);

}