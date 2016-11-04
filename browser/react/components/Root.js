import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Footer from './Footer'

export default class Root extends Component {
  constructor() {
    super()
    this.state = { 
      album: fakeAlbum
    }
  }

  render() {
    const { album } = this.state
    console.log(album)
    return (
      <div id="main" className="container-fluid">
        <Sidebar />
        <Main />
        <Footer />
      </div>
    )
  }
}

const fakeAlbum = {
  name: 'Abbey Road',
  imageUrl: 'http://fillmurray.com/300/300',
  songs: [{
    id: 1,
    name: 'Romeo & Juliette',
    artists: [{name: 'Bill'}],
    genre: 'Funk',
    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  }, {
    id: 2,
    name: 'White Rabbit',
    artists: [{name: 'Bill'}, {name: 'Bob'}],
    genre: 'Fantasy',
    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  }, {
    id: 3,
    name: 'Lucy in the Sky with Diamonds',
    artists: [{name: 'Bob'}],
    genre: 'Space',
    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  }]
};
