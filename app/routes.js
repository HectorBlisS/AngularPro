(function () {
    angular
        .module('notas')
        .config(config);


    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/',{
                template:`<h1>Componentes</h1>`
            })
            .when('/planets',{
                template:`<planet-componet></planet-componet>`
            })
            .when('/characters',{
                template:`<people-component></people-component>`
            })
            .otherwise({
                redirectTo:('/')
            });
    }

})();