(function(){

	let star={
		controller:StarController,
		templateUrl:'app/components/starships/starships.html'
	}
	function StarController(){
		let star = this;
	}

	angular
		.module('notas')
		.component('starComponent', star);
})();