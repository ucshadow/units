if(Meteor.isServer){
  Meteor.methods({
    add_to_units: function(obj){
      Units.insert(obj);
    },
    delete_unit: function(obj){
      Units.remove({name: obj})
    },
    is_taking_charge: function(v, n){
      Units.update({name: n}, {$set: {controlledBy: v}})
    },
    peer_id: function(id, name){
      Units.update({name: name}, {$set: {peerId: id}})
    },
    add_to_stats: function(obj){
      UserStats.insert(obj)
    },
    delete_user: function(obj){
      if(admin_ids.indexOf(this.userId) >= 0){
        Meteor.users.remove({username: obj})
      } else {
        return null;
      }
    },
    delete_userStats: function(obj){
      if(admin_ids.indexOf(this.userId) >= 0){
        UserStats.remove({name: obj})
      } else {
        return null;
      }
    },
    edit_user_prop: function(name, prop, value){
      var field = {};
      field[prop] = value;
      UserStats.update({name: name}, {$set: field})
    },
    add_time: function(obj){
      var n = Meteor.user().username;
      var current = UserStats.findOne({name: n}).availableTime;
      UserStats.update({name: n}, {$set: {availableTime: current + obj}})
    },
    start_time: function(obj){
      if(check === false) {
        var n = Meteor.user().username;
        init_points = UserStats.find({name: n}).fetch()[0].availableTime;
        played_time = UserStats.find({name: n}).fetch()[0].playedTime;
        username = n;
        points = init_points;

        controller = Meteor.setInterval(updater, 5000);
        check = true;
      }
    },
    stop_time: function(){
      Meteor.clearInterval(controller);
      UserStats.update({name: username}, {$set: {playedTime: played_time + (init_points - points)}});
      check = false;
    }
  });

  var points;
  var controller;
  var username;
  var init_points;
  var played_time;
  var check = false;

  var updater = function(){
    var current_points = points;
    if(current_points >= 1){
      UserStats.update({name: username}, {$set: {availableTime: current_points}});
      points -= 5;
    }
  };

}