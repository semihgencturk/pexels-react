import React from 'react';
import { Link } from 'react-router-dom';

const License = () => {
  return (
    <div className='hide-when-smaller-1000'>
      <Link className='nav-bar-license-container' to='TODO'>
        <button className='nav-bar-license-text'>License</button>
      </Link>
    </div>
  );
};

export default License;
