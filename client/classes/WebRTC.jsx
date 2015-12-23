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
      autoRequestMedia: false
    });
    window.webrtc.joinRoom(window.room);

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
          <button id="openRoom" onClick={this.join}>Join Room</button>
          <button id="drop" onClick={this.drop}>Drop</button>
          <button id="send" onClick={this.send}>Send</button>
        <hr />
      </div>
    )
  }
});

