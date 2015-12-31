UnitProcessor = React.createClass({
  propTypes: {
    unitObject: React.PropTypes.object.isRequired
  },

  sh: function(e){
    var n = (e.target.getAttribute('aria-label'));
    FlowRouter.go('/live/' + n);
  },

  setPictures(pic, label){
    var img = '<img src="' + pic + '" ';
    var aria_label = 'aria-label="' + label + '" ';
    var onClick = 'onClick={this.sh} ';
    return {
      __html: img + aria_label + ' </img>'
    }
  },

  render(){
    return(
      <div className="single_unit">
        <div className="unit_picture" dangerouslySetInnerHTML={this.setPictures(this.props.unitObject.picture,
        this.props.unitObject.name)} onClick={this.sh}></div>
        <div className="unit_text">
          <div className="alert alert-info unit_info">Name: {this.props.unitObject.name}</div>
          <div className="alert alert-info unit_info">Type: {this.props.unitObject.type}</div>
          <div className="alert alert-info unit_info">Price: {this.props.unitObject.price}</div>
          <div className="alert alert-info unit_info">Used by: {this.props.unitObject.controlledBy}</div>
        </div>
      </div>
    )
  }
});