import React from 'react';
import './videocontrols.css';

function VideoControls(props) {
  return(
    <div className="VideoControls">
{props.children}
</div>
  )
}

export default VideoControls;

