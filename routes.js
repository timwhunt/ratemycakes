const controller = require("./controller");

module.exports = function(app){
    app.get('/cakes',controller.all);
    app.get('/cakes/:id',controller.get);
    app.post('/cakes', controller.create);
    // app.put('/cakes', controller.update);
    app.delete('/cakes/:id', controller.delete);
    app.post('/cakes/:id/ratings', controller.createRating);

};