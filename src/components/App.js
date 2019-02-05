import React, { Component } from 'react';
import Playlist from './Playlist';
import data from '../api.json'
import '../index.css'


class App extends Component {

  render() {
    return (
<div> 
<div className="container">
<div className="row">
<div className="col">
<h1 className="titleBox">Watch the Best Movies of the Week</h1>
<Playlist data = {data}/>
</div>
</div>
</div>
</div>
    )
  }
}

export default App;
