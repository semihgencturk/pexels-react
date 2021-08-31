import React, { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import Explore from './Explore';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Join from './Join';
import License from './License';
import Logo from './Logo';
import Upload from './Upload';
import '../../App.css';
import SearchBar from '../search-bar/SearchBar';

const NavBar = () => {
  const [mainNavBar, setMainNavBar] = useState<boolean>(false);

  const navBarScrollingHandler = () => {
    window.scrollY >= 125 ? setMainNavBar(true) : setMainNavBar(false);
  };

  window.addEventListener('scroll', navBarScrollingHandler);
  return (
    <div
      className={
        mainNavBar ? 'main-nav-bar' : 'main-nav-bar transparent-nav-bar'
      }
    >
      <div className='nav-bar-left-side'>
        <Logo />
        {mainNavBar && <SearchBar placeHolder='Search for free photos' />}
      </div>
      <div className='nav-bar-right-side'>
        <Explore />
        <License />
        <Upload />
        <Dropdown />
        <Join />
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default NavBar;
