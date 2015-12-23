SingleUnitPage = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      justThis: Units.find({name: this.props.exclude}).fetch()
    }
  },

  renderJustThis(){
    return this.data.justThis.map((unit) => {
      return <UnitProcessor key={unit._id} unitObject={unit} />
    })
  },

  render: function(){
    return(
      <div>
        {this.renderJustThis()}
      </div>
    )
  }

});
