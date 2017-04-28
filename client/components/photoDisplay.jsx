import React from 'react';

class PhotoDisplay extends React.Component {
  render() {
    return (
      <div>
        <h2> PhotoDisplay </h2>
        <h4>{this.props.photo}</h4>
        <img src={this.props.photo} />
      </div>
    )
  }
}
export default PhotoDisplay;