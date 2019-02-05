import React from 'react';
import './modal.css'

function ModalContent(props){
  return(
<div className="ModalContent">
  {props.children}
  <button 
  onClick={props.closeHandle}
  className="Modal-close"
  />
</div>
  )
}

export default ModalContent;