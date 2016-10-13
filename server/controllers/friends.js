console.log('**********friends controller***********');

var mongoose = require('mongoose')
Friend = mongoose.model('Friend')
function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends){
      if(err){
        console.log(err);
      } else {
        res.json(friends);
      }
    })
  };
  this.create = function(req,res){
    var friend =  new Friend(req.body)
    friend.save(function(err){
      if(err){
        console.log(err);
      } else {
        res.json(friend);
      }
    })
  };
  this.update = function(req,res){
    console.log(req.body);
    Friend.findOne({_id: req.params.id}, function(err, updatefriend){
    updatefriend.fname = req.body.fname;
    updatefriend.lname = req.body.lname;
    updatefriend.dob = req.body.dob;
    updatefriend.save(function(err){
      if(err){
        console.log(err);
      } else {
        res.json(updatefriend);
      }
    })
  })
  };

  this.delete = function(req,res){
    Friend.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      } else {
        Friend.find({}, function(err, friends){
          if(err){
          console.log(err);
          } else {
          res.json(friends);
           }
        });
      }
    })
  };
  this.show = function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err){
        console.log(err);
      } else {
        res.json(friend);
      }
    })
  };
}
module.exports = new FriendsController();



