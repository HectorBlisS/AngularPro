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
            .when('/specie', {
                template: `<specie-componet></specie-componet>`
            })
            .when('/starships', {
                template: `<star-component></star-component>`
            })
<<<<<<< HEAD
            .when('/characters',{
                template:`<people-component></people-component>`
=======
            .when('/films', {
                template: `<films-component></films-component>`
>>>>>>> f58fa020427f5bbb334a4ad3e5966f3fe448a1f4
            })
            .otherwise({
                redirectTo: ('/')
            });
    }

})();
