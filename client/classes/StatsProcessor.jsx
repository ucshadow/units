StatsProcessor = React.createClass({

  propTypes: {
    stat: React.PropTypes.object.isRequired
  },

  menuRenderer: function(){
    if(this.props.stat.not_logged !== 1){
      return(
        <div>
        <li>
        <div className="menu-box-tab"><span className="icon fa fa-user-secret scnd-font-color">
          </span>Name<div className="menu-box-number">{this.props.stat.name}</div></div>
        </li>
        <li>
          <div className="menu-box-tab"><span className="icon fa fa-tag scnd-font-color">
          </span>Title<div className="menu-box-number">{this.props.stat.title}</div></div>
        </li>
        <li>
          <div className="menu-box-tab"><span className="icon fa fa-fort-awesome scnd-font-color">
          </span>Clan<div className="menu-box-number">{this.props.stat.clan}</div></div>
        </li>
        <li>
          <div className="menu-box-tab"><span className="icon fa fa-bar-chart scnd-font-color">
          </span>Rank<div className="menu-box-number">{this.props.stat.rank}</div></div>
        </li>
        <li>
          <div className="menu-box-tab"><span className="icon fa fa-heart-o scnd-font-color">
          </span>Favorite<div className="menu-box-number">{this.props.stat.favorite}</div></div>
        </li>
        <li>
          <div className="menu-box-tab"><span className="icon fa fa-flag-checkered scnd-font-color">
          </span>Victories<div className="menu-box-number">{this.props.stat.victories}</div></div>
        </li>
        <li>
          <div className="menu-box-tab"><span className="icon fa fa-hourglass scnd-font-color">
          </span>Played Time<div className="menu-box-number">{this.props.stat.playedTime}</div></div>
        </li>
        <li>
          <div className="menu-box-tab"><span className="icon fa fa-hourglass-end scnd-font-color">
          </span>Time Left<div className="menu-box-number">{this.props.stat.availableTime}</div></div>
        </li>
      </div>
      )
    } else {
      return (
        <div><span>Log In to see stats</span></div>
      )
    }
  },

  render(){
    return(
      <div>
        {this.menuRenderer()}
      </div>
    )
  }
});