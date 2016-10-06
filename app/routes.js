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
                template:`<h1>Characters</h1>`
            })
            .when('/specie',{
                template:`<specie-componet></specie-componet>`
            })
            .otherwise({
                redirectTo:('/')
            });
    }

})();
