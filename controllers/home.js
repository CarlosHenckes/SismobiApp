module.exports = function (app) {
    var HomeController = {
        index: function (request, response) {
            response.render('index');
        },
        login: function(request, response){
            response.render('main');
        },
        cards: function(request, response){
            response.render('cards');
        }
    };
    return HomeController;
};