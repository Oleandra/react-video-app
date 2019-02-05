import React from 'react';
import './videotitle.css';


function VideoTitle(props) {
  return (
    <div className="VideoTitle">
      <h2>{props.title}</h2>
    </div>
  )
}

export default VideoTitle;