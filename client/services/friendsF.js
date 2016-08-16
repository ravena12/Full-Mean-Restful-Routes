console.log('Friends Factory');
myApp.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
    	console.log(newfriend)
      $http.post('/friends', newfriend).then(function(returned_data){
      	console.log("*****")
        console.log(returned_data.data);
        console.log("*****")
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(){ // what parameters do we need?
      // Your code here
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
     
        friends = returned_data.data;
        callback(friends);
      })
 //Note: this can be shortened to $http.get('/friends').then(callback); 
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){
    	$http.delete('/friends/' + id ).then(function(deleteFriend){
    		callback(deleteFriend);

    	})
    };
    this.show = function(){// what parameters do we need?
        // Your code here
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);