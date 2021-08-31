import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const License = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className='hide-when-smaller-848'>
      <div
        className={
          isHover ? 'nav-bar-hovered-join-container' : 'nav-bar-join-container'
        }
      >
        <Link to='TODO'>
          <button
            className='nav-bar-join-text'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default License;
