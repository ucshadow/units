AccountsUI = React.createClass({

  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  },

  componentWillUnmount(){
    Blaze.remove(this.view);
  },

  render() {
    return <span ref="container" />;
  }
});


UploadUI = React.createClass({

  componentDidMount(){
    this.view = Blaze.render(Template.upload_bootstrap,
    ReactDOM.findDOMNode(this.refs.container))
  },

  componentWillUnmount(){
    Blaze.remove(this.view);
  },

  render(){
    return <span ref="container" />
  }

});