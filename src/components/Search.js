import React from 'react';
import './search.css'

const Search = (props) => (
  <form 
  className="Search" 
  action=""
  onSubmit={props.handleSubmit}>
  <input 
  ref={props.setRef}
  className="Search-input" 
  type="text"
  placeholder="Search for your favorite video"
  name="search"
  onChange={props.handleChange}
  value={props.value}
  />
  </form>

  )

export default Search;