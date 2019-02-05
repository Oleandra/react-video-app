import React from 'react';
import './homelayout.css'

function HomeLayout(props) {
  return (
    <section className="HomeLayout">
      {props.children}
    </section>
  )
}

export default HomeLayout