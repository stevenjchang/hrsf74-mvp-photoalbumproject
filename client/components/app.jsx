import React from 'react';
import Nav from './nav.jsx';
import PhotoList from './photoList.jsx';
import PhotoDisplay from './photoDisplay.jsx';

var data = [
    { name: 'cat_photo', photoUrl: 'http://placehold.it/350x150'},
    { name: 'dog_photo', photoUrl: 'http://placehold.it/350x150'},
    { name: 'cow_photo', photoUrl: 'http://placehold.it/350x150'}
  ];


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection : data,
      currentImg : 'current Photo'
    }
    
    this.setCurrentImg = this.setCurrentImg.bind(this);
  }
  
  setCurrentImg(img) {
    this.setState({currentImg: img})
  }

  render() {
    return (
      <div>
        <Nav />
        <div className='col-md-12'>
          <div className='col-md-6'>
            <PhotoList collection={this.state.collection} setCurrentImg={this.setCurrentImg} />
          </div>
          <div className='col-md-6'>
            <PhotoDisplay photo={this.state.currentImg}/>
          </div>
        </div>
        
      </div>
    )
  }
}

export default App;

