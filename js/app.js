angular.module("notas",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/notes',{
		templateUrl: 'templates/pages/notes/index.html',
	})
	.when('/users',{
		templateUrl: 'templates/pages/users/index.html',
	})
	.when('/',{
		templateUrl: 'templates/pages/notes/index.html',
	})
	.otherwise({ redirectTo: '/'});
}]);

