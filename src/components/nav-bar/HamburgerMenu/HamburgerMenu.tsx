import React, { useState } from 'react';
import HamburgerMenuFooterItems from './HamburgerMenuFooterItems';
import HamburgerMenuItem from './HamburgerMenuItem';

const HamburgerMenu = () => {
  const [isExpended, setIsExpended] = useState<boolean>(false);
  return (
    <div className='hide-when-greater-849'>
      <div
        className={
          isExpended ? 'ExpendedHamburgerMenu' : 'collapsed-hamburger-menu'
        }
      >
        <button
          className='nav-bar-hamburger-menu-icon'
          onClick={() => setIsExpended(!isExpended)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>
          </svg>
        </button>

        {isExpended && (
          <div className='hamburger-menu-items'>
            <ul>
              <HamburgerMenuItem linkTo='TODO' title='Home' />
              <HamburgerMenuItem linkTo='TODO' title='Discover Photos' />
              <HamburgerMenuItem linkTo='TODO' title='Popular Search' />
              <HamburgerMenuItem linkTo='TODO' title='Leaderboard' />
              <HamburgerMenuItem linkTo='TODO' title='Free Videos' />
              <HamburgerMenuItem linkTo='TODO' title='Pexels Blog' />,
              <HamburgerMenuItem linkTo='TODO' title='Login' />
              <HamburgerMenuItem linkTo='TODO' title='Join' />
              <HamburgerMenuItem linkTo='TODO' title='Change Languages' />
              <HamburgerMenuItem linkTo='TODO' title='License' />
              <HamburgerMenuItem linkTo='TODO' title='Apps And Ps Plugins' />
              <HamburgerMenuItem linkTo='TODO' title='FAQ' />
              <HamburgerMenuItem linkTo='TODO' title='About Us' />
              <HamburgerMenuItem linkTo='TODO' title='Imprint & Terms' />
              <HamburgerMenuFooterItems />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
