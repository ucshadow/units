Tracker.autorun(function() {
  if (Meteor.isClient) {


    Meteor.subscribe('username');


    Meteor.subscribe('units');
    Meteor.subscribe('stats');


    check_ = function () {
      var names = [];
      var x = Units.find().fetch();
      for (var i in x) {
        names.push(x[i].name)
      }
      return names;
    }
  }


});