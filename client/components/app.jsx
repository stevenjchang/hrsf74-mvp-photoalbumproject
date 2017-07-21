import React from 'react';
import Nav from './nav.jsx';
import PhotoList from './photoList.jsx';
import PhotoDisplay from './photoDisplay.jsx';
import $ from 'jquery';
import axios from 'axios';

var data = [
    { name: 'cat_photo', photoUrl: 'http://placehold.it/250x150'},
    { name: 'dog_photo', photoUrl: 'http://placehold.it/450x150'},
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
    this.postToServer = this.postToServer.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'POST',
      url: '/postpets',
      success: function(results) {
        this.setState({collection: results.data})
      }
    })
  }
  
  setCurrentImg(img) {
    this.setState({currentImg: img})
  }

  postToServer(form_input) {
    axios.post('/postpets', {
      name: form_input.name,
      photoUrl: form_input.photoUrl
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Nav postToServer={this.postToServer} />
        <div className='col-md-12'>
          <div className='col-md-5'>
            <PhotoList collection={this.state.collection} setCurrentImg={this.setCurrentImg} />
          </div>
          <div className='col-md-5'>
            <PhotoDisplay photo={this.state.currentImg}/>
          </div>
        </div>
        
      </div>
    )
  }
}

export default App;

