(function(){
	let people = {
		controller: PeopleController,
		templateUrl: 'app/components/characters/characters.html'
	}

	function PeopleController($http){
		let peoples = this;
		$http({
			method:'GET',
			url:'http://swapi.co/api/people/'
		}).then(function(response){
			peoples.data = response.data.results;
			console.log(peoples.data)
		})
	}

	angular
		.module('notas')
		.component('peopleComponent', people);
})();