myApp.controller('friendController', ['$scope','friendsFactory','$location', function($scope, friendsFactory, $location) {
	$scope.friends = '';
var index = function(){
        friendsFactory.index(function(returnedData){
        $scope.friends = returnedData;
    
        });
    };
index();

$scope.create = function(){
		friendsFactory.create($scope.newFriend, function(data){
			$scope.newFriend = data;
			console.log($scope.newFriend)
		})
		$scope.newFriend = {};
		$location.url('/')

	}
$scope.delete = function(id) {
	friendsFactory.delete(id, function(deleteFriend){
		console.log(deleteFriend)
		index();


	})
}



	 }])



/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.



  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the friends when we get back?  We can re-run index.
*/
