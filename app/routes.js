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
<<<<<<< HEAD
            .when('/specie',{
                template:`<specie-componet></specie-componet>`
=======
            .when('/starships',{
                template:`<star-component></star-component>`
            })
            .when('/films',{
                template:`<films-component></films-component>`
>>>>>>> 56360b55ee0d85865eb5d18d31fc88b7fb413fcb
            })
            .otherwise({
                redirectTo:('/')
            });
    }

})();
