(function () {

    let specie = {
        controller:SpecieController,
        templateUrl:'app/components/species/species.html'
    }

    function SpecieController($http) {
        let specie = this;

        $http({
          method: 'GET',
          url: 'http://swapi.co/api/species/'
        }).then(function(response){
          species.data = response.data.results;
          console.log(planets.data)
        })
    }

    angular
        .module('notas')
        .component('specieComponet',specie);
})();
