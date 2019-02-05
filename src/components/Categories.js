import React from 'react';
import Category from './Category';
import SearchContainer from './SearchContainer' 
import './categories.css'

function Categories(props) {
  return (
    <div className="Categories">
    <SearchContainer />
      {
        props.categories.map((item) => {
          return <Category 
          key={item.id} 
          {...item} 
          handleOpenModal={props.handleOpenModal}
          />
        })
      }
    </div>
  )
}

export default Categories;

