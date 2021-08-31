import React from 'react';
import HamburgerFooterItem from './HamburgerFooterItem';

const HamburgerMenuFooterItems = () => {
  return (
    <div className='HamburgerMenuFooterItems'>
      <ul>
        <HamburgerFooterItem
          linkTo='https://www.facebook.com/pexels'
          logoImageSource='TODO'
          logoImageDescription='Facebook Logo'
        />
        <HamburgerFooterItem
          linkTo='https://twitter.com/pexels'
          logoImageSource='TODO'
          logoImageDescription='Twitter Logo'
        />
        <HamburgerFooterItem
          linkTo='https://instagram.com/pexels/'
          logoImageSource='TODO'
          logoImageDescription='Instagram Logo'
        />
        <HamburgerFooterItem
          linkTo='https://www.pinterest.com/pexels'
          logoImageSource='TODO'
          logoImageDescription='Pinterest Logo'
        />
        <HamburgerFooterItem
          linkTo='https://www.youtube.com/c/PexelsPhotos'
          logoImageSource='TODO'
          logoImageDescription='YouTube Logo'
        />
      </ul>
    </div>
  );
};

export default HamburgerMenuFooterItems;
