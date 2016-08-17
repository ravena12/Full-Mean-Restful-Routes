var myApp = angular.module('myApp', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when('/new', {
		templateUrl : 'partials/new.html'
	})
	.when('/edit/:id', {
		templateUrl : 'partials/edit.html'
	})
	.when('/show/:id', {
		templateUrl : 'partials/show.html'
	})
	.when('/', {
		templateUrl : 'partials/dash.html'
	})
	.otherwise({
		redirectTo : '/'
	})
})