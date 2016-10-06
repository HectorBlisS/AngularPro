(function(){


			let  films ={
				controller: FilmController,
				templateUrl: 'app/components/films/films.html'
			}

			function FilmController($http){

				let films = this;

				$http({

					method: 'GET',
					url: 'http://swapi.co/api/films',
				}).then(function(response){

					films.data = response.data.results;

					console.log(films.data)
				})



			}

			angular.module('notas')
			.component('filmsComponent',films);  



})();