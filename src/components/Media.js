import React, { PureComponent } from 'react';
import './media.css';

class Media extends PureComponent {
  state= {
    author: 'Anonymous'
  }
handleClick =(event) => {
this.props.openModal(this.props);
 }
  render(){
  
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
        <img 
        src={this.props.cover}
        alt="helo helo"
        width={250}
        height={180}
        className="Media-image"
        />
        <h3 className="Media-title">{this.props.title}</h3>
        <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

export default Media;