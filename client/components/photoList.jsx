import React from 'react';

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) {
    console.log('e.target.dataset.photourl', e.target.dataset.photourl);
    this.props.setCurrentImg(e.target.dataset.photourl)
  }
  render() {
    return (
      <div>
        <h3>PhotoList</h3>
        
        <ul>
          {this.props.collection.map((photo, i) => 
            <li onClick={this.handleClick.bind(this)} key={i} data-photourl={photo.photoUrl}>{photo.name}</li>)}
        </ul>
      </div>
    ) 
  }

}
export default PhotoList;