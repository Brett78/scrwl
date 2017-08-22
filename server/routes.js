module.exports = function(app){

    var path = require('path');

    // WEB ROUTES
    app.get('/', function(req, res){
        res.sendFile(path.resolve('content/index.html'));
    });

    // FILE INCLUDE PATHS
    app.get('/bundle.js', function(req, res){
        res.sendFile(path.resolve('content/dist/bundle.js'));
    });

};