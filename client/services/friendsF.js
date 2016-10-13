console.log('Friends Factory');
myApp.factory('friendsFactory', ['$http', function($http) {
  var friends = [];
  var friend = [];
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(updateFriend, id,  callback){ 
      console.log(updateFriend);
      $http.put('/friends/'+ id, updateFriend).then(function(updateFriend){
        callback(updateFriend.data);
      })
    };
    this.index = function(callback){
      $http.get('/friends').then(function(returned_data){
     
        friends = returned_data.data;
        callback(friends);
      })
    };
    this.delete = function(id, callback){
    	$http.delete('/friends/' + id ).then(function(deleteFriend){
    		callback(deleteFriend);
    	})
    };
    this.show = function(id, callback){
      console.log('got id')
        $http.get('/friends/' + id).then(function(showFriend){
          callback(showFriend.data);
        })
    };
   }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);