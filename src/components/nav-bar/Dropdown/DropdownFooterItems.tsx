import React from 'react';
import DropdownFooterItem from './DropdownFooterItem';

const DropdownFooterItems = () => {
  return (
    <div className='dropdown-list-footer-items'>
      <ul>
        <DropdownFooterItem
          linkTo='https://www.facebook.com/pexels'
          logoImageSource='TODO'
          logoImageDescription='Facebook Logo'
        />
        <DropdownFooterItem
          linkTo='https://twitter.com/pexels'
          logoImageSource='TODO'
          logoImageDescription='Twitter Logo'
        />
        <DropdownFooterItem
          linkTo='https://instagram.com/pexels/'
          logoImageSource='TODO'
          logoImageDescription='Instagram Logo'
        />
        <DropdownFooterItem
          linkTo='https://www.pinterest.com/pexels'
          logoImageSource='TODO'
          logoImageDescription='Pinterest Logo'
        />
        <DropdownFooterItem
          linkTo='https://www.youtube.com/c/PexelsPhotos'
          logoImageSource='TODO'
          logoImageDescription='YouTube Logo'
        />
      </ul>
    </div>
  );
};

export default DropdownFooterItems;
