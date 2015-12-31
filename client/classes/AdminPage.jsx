AdminPage = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      units: Units.find().fetch(),
      users: Meteor.users.find().fetch(),
      usersDB: UserStats.find().fetch()
    }
  },

  delUnit: function(){
    var x = $('#del_unit').val();
    Meteor.call('delete_unit', x);
  },

  avblUnits: function(){
    var u = [];
    for(var i in this.data.units){
      u.push(' ' + this.data.units[i].name)
    }
    return u;
  },

  addUnit: function(){
    var name = $('#unit_name').val();
    var picture = $('#unit_picture').val();
    var price = $('#unit_price').val();
    var type = $('#unit_type').val();
    const unit = {
      availability: true,
      controlledBy: 'No One',
      inService: false,
      name: name,
      picture: picture,
      price: price,
      type: type
    };
    Meteor.call('add_to_units', unit);
  },

  avblUsers: function(){
    var u = [];
    for(var i in this.data.users){
      u.push(' ' + this.data.users[i].username)
    }
    return u.toString()
  },

  avblUsersDB: function(){
    var u = [];
    for(var i in this.data.usersDB){
      u.push(' ' + this.data.usersDB[i].name)
    }
    return u.toString();
  },

  delUser: function(){
    Meteor.call('delete_user', $('#del_user').val())
  },

  delUserDB: function(){
    Meteor.call('delete_userStats', $('#del_userS').val());
  },

  UnitMapper: function(name, key){
    return(
      <button type="button" id={name} className="btn btn-default admin_btn" onClick={this.activateUnit} key={key}>
        {name}
      </button>
    )
  },

  UnitsControlPanel: function(){
    return(this.avblUnits().map((u) => {
      return this.UnitMapper(u, (Math.random() * 10).toString())
    }))
  },

  activateUnit: function(e){
    var webrtc = new SimpleWebRTC({
      // the id/element dom element that will hold "our" video
      localVideoEl: 'localVideo',
      // the id/element dom element that will hold remote videos
      remoteVideosEl: 'remotesVideos',
      // immediately ask for camera access
      autoRequestMedia: true//,
      //url: 'https://sig-warleader.c9users.io/'
    });

    // we have to wait until it's ready
    webrtc.on('readyToCall', function () {
      // you can name it anything
      webrtc.joinRoom(e.target.id.substring(1));
    });

    webrtc.on('channelMessage', function(peer, label, message){
      console.log(Date.now() - message.payload);
    })
  },
  
  editProp: function(){
    var name = $('#new_prop_user').val();
    var prop = $('#new_prop_prop').val();
    var value = $('#new_prop_value').val();
    Meteor.call('edit_user_prop', name, prop, value)
  },

  componentDidMount: function(){

  },

  render(){
    return(
      <div>
        <div id="stream_container"></div>
        <span className="glyphicon glyphicon-scissors"> Delete Unit</span>
        <div className="input-group">
            <span className="input-group-addon span_size" id="basic-addon3">Unit Name</span>
            <input type="text" className="form-control admin_form" id="del_unit"/>
            <button type="button" className="btn btn-default admin_btn" onClick={this.delUnit}>
              <span className="glyphicon glyphicon-ok"> </span> Confirm
            </button>
            <span className="avbl_units">Available Units: {this.avblUnits().toString()}</span>
        </div>

        <p>---------------------------------------------------------</p>

        <span className="glyphicon glyphicon-plus"> Add Unit</span>
        <div className="input-group">
          <div className="single_field">
            <span className="input-group-addon span_size">Unit Name</span>
            <input type="text" className="form-control admin_form" id="unit_name"/>
          </div>
          <div className="single_field">
            <span className="input-group-addon span_size">Unit Picture</span>
            <input type="text" className="form-control admin_form" id="unit_picture"/>
          </div>
          <div className="single_field">
            <span className="input-group-addon span_size">Unit Type</span>
            <input type="text" className="form-control admin_form" id="unit_type"/>
          </div>
          <div className="single_field">
            <span className="input-group-addon span_size">Unit Price</span>
            <input type="text" className="form-control admin_form" id="unit_price"/>
            <button type="button" className="btn btn-default admin_btn" onClick={this.addUnit}>
            <span className="glyphicon glyphicon-ok"> </span> Confirm
          </button>
          </div>

        </div>

        <p>---------------------------------------------------------</p>

        <span className="glyphicon glyphicon-scissors"> Delete User</span>
        <div className="input-group">
            <span className="input-group-addon span_size" id="basic-addon3">User Name</span>
            <input type="text" className="form-control admin_form" id="del_user"/>
            <button type="button" className="btn btn-default admin_btn" onClick={this.delUser}>
              <span className="glyphicon glyphicon-ok"> </span> Confirm
            </button>
            <span className="avbl_units">Available Users: {this.avblUsers()}</span>
        </div>

        <p>---------------------------------------------------------</p>

        <span className="glyphicon glyphicon-scissors"> Delete User in UserStats DB</span>
        <div className="input-group">
            <span className="input-group-addon span_size" id="basic-addon3">User Name</span>
            <input type="text" className="form-control admin_form" id="del_userS"/>
            <button type="button" className="btn btn-default admin_btn" onClick={this.delUserDB}>
              <span className="glyphicon glyphicon-ok"> </span> Confirm
            </button>
            <span className="avbl_units">Available Users: {this.avblUsersDB()}</span>
        </div>
        
        <p>---------------------------------------------------------</p>
        
        
        <span className="glyphicon glyphicon-scissors"> Modify User Stats Prop</span>
        <div className="input-group">
          <div className="single_field">
            <span className="input-group-addon span_size">User Name</span>
            <input type="text" className="form-control admin_form" id="new_prop_user"/>
          </div>
          <div className="single_field">
            <span className="input-group-addon span_size">User Prop</span>
            <input type="text" className="form-control admin_form" id="new_prop_prop"/>
          </div>
          <div className="single_field">
            <span className="input-group-addon span_size">New Value</span>
            <input type="text" className="form-control admin_form" id="new_prop_value"/>
            <button type="button" className="btn btn-default admin_btn" onClick={this.editProp}>
            <span className="glyphicon glyphicon-ok"> </span> Confirm
            </button>
          </div>
        </div>
        

        {/*<UploadUI />*/}

        <p>---------------------------------------------------------</p>

        {this.UnitsControlPanel()}

        <div id="localVideo"></div>
        <div id="remotesVideos"></div>
      </div>
    )
  }
});