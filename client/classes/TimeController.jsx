TimeController = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData(){
    return UserStats.find().fetch()
  },

  clickStart: function(){
    Meteor.call('is_taking_charge', Meteor.user().username, this.props.unitName);
    Meteor.call('start_time');
  },

  clickStop: function(){
    Meteor.call('is_taking_charge', 'No One', this.props.unitName);
    Meteor.call('stop_time');
  },

  clickAdd: function(){
    Meteor.call('add_time', 100)
  },

  isLogged: function(){
    if(Meteor.userId()){
      return this.data[0].availableTime
    } else {
      return 0
    }
  },

  render(){
    return(
      <div>
        <div className="unit_controllers">
          <RenderTime time={this.isLogged()} />
          <button className="btn btn-info ctrlboxbtn" onClick={ this.clickStart }> Start </button>
          <button className="btn btn-info ctrlboxbtn ctrlboxbtn_not_start" onClick={ this.clickStop }> Stop </button>
          <button className="btn btn-info ctrlboxbtn ctrlboxbtn_not_start" onClick={ this.clickAdd }> Add Time </button>
        </div>
      </div>
    )
  }
});