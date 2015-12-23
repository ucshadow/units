if(Meteor.isServer) {

  Meteor.publish('units', function () {
    return Units.find();
  });

  Meteor.publish('username', function () {
    if(admin_ids.indexOf(this.userId) >= 0) {
      return Meteor.users.find();
    }
  });

  Meteor.publish('stats', function () {
    if(admin_ids.indexOf(this.userId) >= 0) {
      return UserStats.find();
    } else {
      if(Meteor.users.findOne({_id: this.userId})) {
        var uId = this.userId;
        var uName = Meteor.users.findOne({_id: uId});
        return UserStats.find({name: uName.username});
      }
    }
  });
}