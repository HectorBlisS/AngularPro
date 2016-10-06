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
                template: `<people-component></people-component>`
            })
            .when('/species', {
                template: `<specie-componet></specie-componet>`
            })
            .when('/starships', {
                template: `<star-component></star-component>`
            })
            .when('/films', {
                template: `<films-component></films-component>`
            })
            .when('/vehicles',{
                template:`<vehicle-componet></vehicle-componet>`
            })
            .otherwise({
                redirectTo: ('/')
            });
    }

})();
