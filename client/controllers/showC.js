console.log('you are in show controller')
myApp.controller('showController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
	$scope.friend = '';
	friendsFactory.show($routeParams.id, function(showFriend){
		$scope.friend = showFriend;
	})
}])

