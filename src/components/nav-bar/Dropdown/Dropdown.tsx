import React, { useState } from 'react';
import DropdownItem from './DropdownItem';
import { Link } from 'react-router-dom';
// import DropdownFooterItems from './DropdownFooterItems';
import '../../../App.css';

const Dropdown = () => {
  const [isExpended, setIsExpended] = useState<boolean>(false);
  return (
    <div className='hide-when-smaller-848'>
      <div className='nav-bar-dropdown-container'>
        <div className='nav-bar-dropdown-title'>
          <Link to='TODO'>
            <button
              className='nav-bar-dropdown-icon'
              onMouseEnter={() => setIsExpended(true)}
              onMouseLeave={() => setIsExpended(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
              </svg>
            </button>
          </Link>
        </div>
        {isExpended && (
          <button
            className='dropdown-items-section-container'
            onMouseEnter={() => setIsExpended(true)}
            onMouseLeave={() => setIsExpended(false)}
          >
            <div className='dropdown-items-content-list-container'>
              <ul className='dropdown-items-content-list'>
                <DropdownItem linkTo='TODO' title='Login' />
                <DropdownItem linkTo='TODO' title='Join' />
                <DropdownItem linkTo='TODO' title='Change Language' />
                <DropdownItem linkTo='TODO' title='Image & Video API' />
                <DropdownItem linkTo='TODO' title='Apps & Plugins' />
                <DropdownItem linkTo='TODO' title='FAQ' />
                <DropdownItem linkTo='TODO' title='Apps & Plugins' />
                <DropdownItem linkTo='TODO' title='Partnerships' />
                <DropdownItem linkTo='TODO' title='Imprint & Terms' />
                {/* <DropdownFooterItems /> */}
              </ul>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
