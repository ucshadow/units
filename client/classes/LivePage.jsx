LivePage = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      allUnits: Units.find().fetch()
    }
  },

  renderUnits(){
    return this.data.allUnits.map((unit) => {
      return <UnitProcessor key={unit._id} unitObject={unit} />
    })
  },

  render: function(){
    return(
      <div className="live_unit_container">
        {this.renderUnits()}
      </div>
    )
  }
});

