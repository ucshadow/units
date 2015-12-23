MainClass = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      stats: UserStats.find().fetch(),
      user: Meteor.users.find().fetch()
    }
  },

  soMuchDanger: function(){
    return {
      __html: '<img width="40px" alt="Your Avatar" src="/imgs/Minah.jpg"> </img>'
    }
  },

  isLogged: function(){
    var db = this.data.user;
    if(db){
      if(Meteor.user()){
        return Meteor.user().username
      } else {
        return null
      }
    }
  },

  renderStats: function(){
    if(this.data.user && this.isLogged()) {
      return (this.data.stats.map((st) => {
        if(st.name === this.isLogged()){
          return <StatsProcessor key={st._id} stat={st}/>
        }
      }))
    } else {
      return <StatsProcessor key={'no_user'} stat={{not_logged: 1}}/>
    }
  },

  render(){
    return(
      <div className="single_unit_container">
        <div className="main_layout">
          <header className="block">

            <ul className="header-menu horizontal-list">
              <li>
                <span className="icon scnd-font-color"><a href="/home">Home</a></span>
              </li>
              <li>
                <span className="icon entypo-cog scnd-font-color"><a href="/live">Live</a></span>
              </li>
            </ul>
            <div className="profile-menu">
              <p><span className="scnd-font-color"><AccountsUI /></span></p>
              <div className="profile-picture small-profile-picture" dangerouslySetInnerHTML={this.soMuchDanger()}>
              </div>
            </div>
          </header>
          <div className="menu-box block">
            <h2 className="titular">Your Stats</h2>
          <ul className="menu-box-menu">
            {this.renderStats()}
            </ul>
          </div>
        </div>
        { this.props.content }
        { this.props.tests }
      </div>
    )
  }
});






