import React, { FC } from 'react';

interface GalleryProps {
  images: any[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <div className='gallery'>
      <div className='gallery-top-section'>
        <div className='gallery-title'>
          <span>Free Stock Photos</span>
        </div>
        <div className='gallery-menu-container'>
          <div className='galley-menu'>
            {/* GALLERY DROPDOWN MENU SHOULD BE SHOWED IN HERE */}
            <button className='gallery-menu-dropdown-title'>Trending</button>
            <i className='gallery-menu-dropdown-icon-container'>
              <svg
                className='gallery-menu-dropdown-icon'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M7 10l5 5 5-5z'></path>
              </svg>
            </i>
          </div>
        </div>
      </div>
      <div className='gallery-photos'>
        {images.map((image, index) => (
          <img
            key={index}
            alt={image.photographer}
            src={image.src.original}
            width='100%'
            height='100%'
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
