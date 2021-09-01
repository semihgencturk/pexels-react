import React from 'react';
import SearchBar from '../search-bar/SearchBar';
import '../../App.css';
import SuggestedTag from './SuggestedTag';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Header = () => {
  const headerBackgroundImagesSources: string[] = [
    'https://images.pexels.com/photos/5859220/pexels-photo-5859220.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;fp-y=0.52&amp;h=500&amp;sharp=20&amp;w=350 350w',
  ];

  const index: number = getRandomInt(0, 0);
  const suggestedTagsItems: string[] = [
    'setur',
    'react',
    'travel',
    'cide',
    'more',
  ];
  return (
    <div className='header-container'>
      <div className='header-background-container'>
        <img
          className='header-background-image'
          src={headerBackgroundImagesSources[index]}
          alt='background'
        />
      </div>
      <div className='header-footer'>
        <div className='hide-when-smaller-848'>
          <button className='header-footer-text'>Photo by Taryn Elliot</button>
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
          <div className='header-search-bar-container-search-tags-items-container'>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
