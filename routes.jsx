FlowRouter.route('/', {
  action: function(){
    ReactLayout.render(MainClass, {
      content: <HomePage />
    });
  }
});

FlowRouter.route('/home', {
  action: function(){
    ReactLayout.render(MainClass, {
      content: <HomePage />
    });
  }
});

FlowRouter.route('/admin', {
  action: function(){
    if(Meteor.userId() === 'igk6Wk73qgvGkumip'){
      ReactLayout.render(MainClass, {
        content: <AdminPage />
      });
    } else {
      FlowRouter.go('/home');
    }
  }
});

FlowRouter.route('/live', {
  action: function(){
    ReactLayout.render(MainClass, {
      content: <LivePage />
    });
  }
});

FlowRouter.route('/live/:name', {
  action: function(params){
    var real = params.name;
    var names = check_();
    if(names.indexOf(real) >= 0){
      ReactLayout.render(MainClass, {
        content: <SingleUnitPage exclude={params.name}/>,
        tests: <UnitController tst={params.name} />
      });
    } else {
      FlowRouter.go('/live')
    }
  }
});
