import React from 'react';
import { Parallax } from 'react-scroll-parallax';

// import classes from '../../assets/scss/modules/parallax.module.scss';

const parallax = () => {
  return (
    <article className="parallax__container">
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <img src="https://images.unsplash.com/photo-1575142322312-fbc2721c0588?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
      </Parallax>
      <div className="parallax">
        <div className="overlay">
          <h2> Easy parallax effect</h2>
          <h4>scroll to see effect</h4>
        </div>
      </div>
      <div>
        <h2>another element</h2>
      </div>
    </article>
  )
}

export default parallax