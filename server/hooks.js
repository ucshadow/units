Accounts.onCreateUser(function(options, user){
  if(!options || !user){
    console.log('err creating user');
    return null;
  } else {
    Meteor.call('add_to_stats', {
      name: user.username,
      playedTime: 0,
      favorite: "None",
      victories: 0,
      availableTime: 60 * 5,
      rank: "initiate",
      clan: "No Clan",
      title: "Newbie"
    })
  }
  return user
});

Meteor.startup(function () {
  //console.log(process.cwd());             //CHANGE TO process.env.PWD on linux servers
  UploadServer.init({
    tmpDir: 'f:/meteor/units-react/public/tmp',
    uploadDir: 'f:/meteor/units-react/public/imgs',
    checkCreateDirectories: false
  });
});
