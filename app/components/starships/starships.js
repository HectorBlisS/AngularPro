(function(){

	let star={
		controller:StarController,
		templateUrl:'app/components/starships/starships.html'
	}
	function StarController($http){
		let stars = this;
		$http({
			method:'GET',
			url:'http://swapi.co/api/starships/'
		}).then(function(response){
			stars.data = response.data.results;
			console.log(stars.data)
		})
	}

	angular
		.module('notas')
		.component('starComponent', star);
})();
