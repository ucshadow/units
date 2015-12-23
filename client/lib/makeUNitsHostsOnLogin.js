if(Meteor.isClient){

  Accounts.onLogin(function(){
    console.log(Meteor.user().username)
  })

}
