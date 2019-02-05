import React, { Component } from 'react';
import Search from './Search';
class SearchContainer extends Component {
  state={
    value: 'Insert video here'
  }
  handleSubmit = event => {
    event.preventfDefault();
    console.log(this.input.value, 'submit')
  }
  setInputRef = element => {
    this.input = element;
  }

  handleChange = event => {
    this.setState({
      value:event.target.value
    })
  }
  render() {
    return (
      <Search 
      setRef={this.setInputRef}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      value={this.state.value}
      />
    )
  }
}
export default SearchContainer;
