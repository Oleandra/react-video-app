import React, { Component } from 'react';
import RegularError from './RegularError';


class catchError extends Component {
  state={
    catchError: false,
  }
  componentDidCatch(error, info) {
    this.setState({
      catchError: true,
    })
  }
  render() {
    if (this.state.catchError) {
  return(
   <RegularError />
  )
}
return this.props.children
  }
}

export default catchError;