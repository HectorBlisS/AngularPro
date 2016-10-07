(function () {

    let planet = {
        controller:PlanetController,
        templateUrl:'app/components/planets/planets.html'
    }

<<<<<<< HEAD
    function PlanetController($firebaseAuth) {
        let planets = this;
        var auth = $firebaseAuth();
        planets.user = null;
        planets.isLogged = false;

        planets.checkUser = function(){
            auth.$onAuthStateChanged(function(fuser){
            if(fuser){
                planets.user = fuser;
                planets.isLogged = true;
                console.log('te ecnotre',fuser);
                // return true;
            }else{
                console.log('nanai',fuser);
                planets.user = null;
                console.log('ontas?');
                // return false;
            }

        });
            if(planets.user){
                return true
            }else{
                return false
            }

        }
         


=======
    function PlanetController($http) {
        let planets = this;

        $http({
            method: 'GET',
            url: 'http://swapi.co/api/planets/'
        }).then(function (response) {
            planets.data = response.data.results;
            console.log(planets.data)
        })
>>>>>>> 3aa7bcc23af8dfccdc2ab07518a1f29bc57bd606
    }

    angular
        .module('notas')
        .component('planetComponet',planet);
})();
