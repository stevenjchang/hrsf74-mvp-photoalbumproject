import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      photoUrl: ''
    }
  }
  render() {
    return (
      <form>
        <p>{this.state.name}</p>
        <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
        <input value={this.state.photoUrl} onChange={(e) => this.setState({photoUrl: e.target.value})} />
        <submit onClick={(e) => this.props.postToServer(this.state)}> Submit </submit>
      </form>
      )
  }
}
export default Nav;