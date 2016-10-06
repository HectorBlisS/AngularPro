(function () {

    let vehicle = {
        controller:vehicleController,
        templateUrl:'app/components/vehicles/vehicles.html'
    }

    function vehicleController($http) {
        let vehicles = this;
        $http({
            method:'GET', url:'http://swapi.co/api/vehicles'
        }).then(function(response){
            vehicles.data = response.data.results;
            console.log(vehicles.data)
        })
    }

    angular
        .module('notas')
        .component('vehicleComponet',vehicle);
})();