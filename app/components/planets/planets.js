(function () {

    let planet = {
        controller:PlanetController,
        templateUrl:'app/components/planets/planets.html'
    }

    function PlanetController($http) {
        let planets = this;

        $http({
            method: 'GET',
            url: 'http://swapi.co/api/planets/'
        }).then(function (response) {
            planets.data = response.data.results;
            console.log(planets.data)
        })
    }

    angular
        .module('notas')
        .component('planetComponet',planet);
})();