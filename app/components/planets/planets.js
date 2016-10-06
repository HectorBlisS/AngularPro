(function () {

    let planet = {
        controller:PlanetController,
        templateUrl:'app/components/planets/planets.html'
    }

    function PlanetController() {
        let planets = this;
    }

    angular
        .module('notas')
        .component('planetComponet',planet);
})();
