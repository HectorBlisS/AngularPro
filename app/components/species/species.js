(function () {

    let specie = {
        controller:SpecieController,
        templateUrl:'app/components/species/species.html'
    }

    function SpecieController($http) {
        let species = this;

        $http({
            method: 'GET',
            url: 'http://swapi.co/api/species/'
        }).then(function (response) {
            species.data = response.data.results;
            console.log(species.data)
        })
    }

    angular
        .module('notas')
        .component('specieComponet',specie);
})();
