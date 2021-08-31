import React from 'react';
import { Link } from 'react-router-dom';

const Upload = () => {
  return (
    <div className='hide-when-smaller-1000'>
      <Link className='nav-bar-upload-container' to='TODO'>
        <button className='nav-bar-upload-text'>Upload</button>
      </Link>
    </div>
  );
};

export default Upload;
