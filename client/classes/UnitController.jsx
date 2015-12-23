UnitController = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData(){
    var prop = this.props.tst;
    return {
      units: Units.find({name: this.props.tst}).fetch(),
      theRest(){
        var all = Units.find().fetch();
        const res = [];
        for(var i in all){
          if(all[i].name !== prop){
            res.push(all[i]);
          }
        }
        return res;
      },
      stats: UserStats.find().fetch()
    }
  },

  renderTheRest(){
    return this.data.theRest().map((unit) => {
      return <UnitProcessor key={unit._id} unitObject={unit} />
    })
  },

  sayName: function(){
    return(this.props.tst);
  },

  getPeer: function(){
    return this.data.units.peerId
  },

  render(){
    return(
      <div className="scr">
        <TimeController unitName={this.props.tst} userStats={this.data.stats}/>
        <div className="video_container">
          <WebRTC unitName={this.sayName()} />
        </div>
        <div className="the_rest">
          {this.renderTheRest()}
        </div>
      </div>
    )
  }
});




