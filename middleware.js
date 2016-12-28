var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log('private router');
        next();
    },
    logger: function(req, res, next) {
        console.log('Request: '+ req.method+ ' '+req.originalUrl);
        next();
    }
}

module.exports = middleware;