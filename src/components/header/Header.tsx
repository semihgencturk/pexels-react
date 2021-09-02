import React, { FC } from 'react';
import SearchBar from '../search-bar/SearchBar';
import '../../App.css';
// import SuggestedTag from './SuggestedTag';

interface HeaderProps {
  background: any[];
}

const Header: FC<HeaderProps> = ({ background }) => {
  //   const suggestedTagsItems: string[] = [
  //     'setur',
  //     'react',
  //     'travel',
  //     'cide',
  //     'more',
  //   ];

  return (
    <div className='header-container'>
      <div className='header-background-container'>
        {background.map((backgroundImage, index) => (
          <img
            className='header-background-image'
            key={index}
            src={backgroundImage.src.original}
            alt={backgroundImage.photographer}
          />
        ))}
      </div>
      <div className='header-footer'>
        <div className='hide-when-smaller-848'>
          {background.map((backgroundImage, index) => (
            <button key={index} className='header-footer-text'>
              Photo by <span>{backgroundImage.photographer}</span>
            </button>
          ))}
        </div>
      </div>
      <section className='header-content'>
        <div className='header-title'>
          <span>
            The best free stock photos & videos shared by talented creators.
          </span>
        </div>
        <div className='header-search-bar-and-suggested-container'>
          <div className='header-search-bar-container'>
            <SearchBar placeHolder='Search for free photos and videos' />
          </div>
          {/* <div className='header-search-bar-container-search-tags-items-container'>
            <li>Suggested: </li>
            <li>
              <ul className='header-search-bar-container-search-tags-items'>
                {suggestedTagsItems.map((suggestedTagItem, key) => (
                  <SuggestedTag
                    title={suggestedTagItem}
                    key={key}
                    linkTo='TODO'
                  />
                ))}
              </ul>
            </li>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Header;
