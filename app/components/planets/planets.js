(function () {

    let planet = {
        controller:PlanetController,
        templateUrl:'app/components/planets/planets.html'
    }

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
         


    }

    angular
        .module('notas')
        .component('planetComponet',planet);
})();