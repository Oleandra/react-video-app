import React from 'react';
import Play from '../icons/Play';
import Pause from '../icons/Pause';
import './playpause.css';

function PlayPause(props) {
  return(
<div className="PlayPause">
{
props.pause ?
<button
  onClick={props.handleClick}
  >
    <Play size={25} color="white" width={25}/>
  </button>
  :
<button
  onClick={props.handleClick}
  >
    <Pause size={25} color="white" width={25}/>
  </button>

} 
</div>
  )
}

export default PlayPause;