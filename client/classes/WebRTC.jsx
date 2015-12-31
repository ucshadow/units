WebRTC = React.createClass({

  getInitialState: function(){
    return {
      c: null
    }
  },

  componentDidMount: function(){
    this._name = this.props.unitName;
    window.room = this._name;
    window.webrtc = new SimpleWebRTC({
      remoteVideosEl: 'remotesVideos',
      autoRequestMedia: false//,
      //url: 'https://sig-warleader.c9users.io/'
    });
    window.webrtc.joinRoom(window.room);
    var width = screen.width;
    var height = screen.height;
    $('.video_container').css('height', height / 2);
    $('.video_container').css('width', width / 2);

  },

  _name: null,

  componentWillUnmount: function(){

  },

  componentDidUpdate: function(){
    console.log(this.props.unitName);
    window.webrtc.leaveRoom(window.room);
    this._name = this.props.unitName;
    window.webrtc.joinRoom(this._name);
    window.room = this._name;
  },

  drop: function(){
    window.webrtc.leaveRoom(window.room)
  },

  join: function(){

  },

  send: function(){
    window.webrtc.sendDirectlyToAll('text chat', 'mess',  Date.now());
  },

  render(){
    return(
      <div>
        <div id="video-container">
          <div id="remotesVideos"></div>

        </div>
        <hr />
          <button id="openRoom" className="btn btn-info ctrlboxbtn ctrlboxbtn_not_start" onClick={this.join}>Join Room</button>
          <button id="drop" className="btn btn-info ctrlboxbtn ctrlboxbtn_not_start" onClick={this.drop}>Drop</button>
          <button id="send" className="btn btn-info ctrlboxbtn ctrlboxbtn_not_start" onClick={this.send}>Send</button>
        <hr />
      </div>
    )
  }
});

