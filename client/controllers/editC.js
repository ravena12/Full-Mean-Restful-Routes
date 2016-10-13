console.log('you are in edit controller')
myApp.controller('editController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
	$scope.update = function() {
	friendsFactory.update($scope.updateFriend, $routeParams.id, function(data){
		$scope.updateFriend = {
			fname: data.fname,
			lname: data.lname,
			dob: new Date(data.dob)
		};
	})
		$scope.updateFriend = {};
	}
	}])
