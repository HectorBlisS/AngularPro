(function() {
    angular
        .module('notas')
        .config(config);


    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                template: `<h1>Componentes</h1>`
            })
            .when('/planets', {
                template: `<planet-componet></planet-componet>`
            })
            .when('/characters', {
                template: `<h1>Characters</h1>`
            })
            .when('/species', {
                template: `<species-componet></species-componet>`
            })
            .when('/starships', {
                template: `<star-component></star-component>`
            })
            .when('/films', {
                template: `<films-component></films-component>`
            })
            .otherwise({
                redirectTo: ('/')
            });
    }

})();
