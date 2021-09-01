import React, { FC, useState, useEffect } from 'react';
import { IoSearch, IoCloseCircleSharp } from 'react-icons/io5';
import { useClickOutside } from 'react-click-outside-hook';
import useDebounce from './useDebounce';
import searchStock from './searchStock';
import RecentSearchesItem from './expended-part-items/RecentSearchesItem';
import CollectionsItem from './expended-part-items/CollectionsItem';
import TrendingTopicsItem from './expended-part-items/TrendingTopicsItem';
import '../../App.css';
import { useSetImages } from '../../context/AppContext';

interface Props {
  placeHolder: string;
}
const SearchBar: FC<Props> = ({ placeHolder }) => {
  const [isExpended, setIsExpended] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const setImages = useSetImages();
  const [clickOutsideHandleRef, isClickedOutside] = useClickOutside();
  const [isRecentSearch, setIsRecentSearch] = useState<boolean>(true);
  const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

  const recentSearches: string[] = ['Code', 'Nature', 'Hiking', 'Sea'];
  const collections: string[] = ['Istanbul', 'Forest', 'Volleyball', 'Cide'];
  const trendingTopics: string[] = [
    'Setur',
    'Travel',
    'React',
    'Frontend',
    'Van Life',
    'Camp',
  ];

  useEffect(() => {
    if (isClickedOutside) setIsExpended(false);
  }, [isClickedOutside]);

  useEffect(() => {
    if (isRecentSearch) {
      setIsRecentSearch(true);
    } else {
      setIsRecentSearch(false);
    }
  }, [isRecentSearch]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchStock(debouncedSearchTerm).then((results) => {
        setImages(results);
        setIsExpended(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <div className='search-bar-container'>
      <div
        className={isExpended ? 'expanded-search-bar' : 'collapsed-search-bar'}
        ref={clickOutsideHandleRef}
      >
        <div className='search-bar-input-container'>
          <input
            type='text'
            className='search-bar-input-text'
            placeholder={placeHolder}
            onClick={() => setIsExpended(true)}
            value={searchTerm}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setSearchTerm((event.target as HTMLInputElement).value)
            }
          />
          <div className='search-bar-search-icon-container'>
            <IoSearch
              onClick={() => setIsExpended(true)}
              className='search-bar-search-icon'
            />
          </div>
        </div>
        {isExpended && (
          <div className='search-bar-expended-part-container'>
            {isRecentSearch && (
              <div>
                <div className='search-bar-recent-searches'>
                  <div className='search-bar-recent-searches-title'>
                    <span>Recent searches</span>
                    <button className='search-bar-recent-searches-title-icon-container'>
                      <IoCloseCircleSharp className='search-bar-recent-searches-title-icon' />
                    </button>
                  </div>
                  <div className='search-bar-recent-searches-items-container'>
                    {isExpended && (
                      <ul className='search-bar-recent-searches-list'>
                        {recentSearches.map((recentSearch, key) => (
                          <RecentSearchesItem title={recentSearch} key={key} />
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className='search-bar-collections'>
                  <div className='search-bar-collections-title'>
                    <span>Collections</span>
                  </div>
                  <div className='search-bar-collections-items-container'>
                    {isExpended && (
                      <ul className='search-bar-collections-list'>
                        {collections.map((collection, key) => (
                          <CollectionsItem
                            title={collection}
                            subtitle='179 photos'
                            source='https://images.pexels.com/photos/633198/pexels-photo-633198.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.6&h=500&sharp=15&w=1400'
                            alt='TODO'
                            key={key}
                          />
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className='search-bar-trending-topics'>
              <div className='search-bar-trending-topics-title'>
                <span>Trending Topics</span>
              </div>
              <div className='search-bar-trending-topics-items-container'>
                {isExpended && (
                  <ul className='search-bar-trending-topics-list'>
                    {trendingTopics.map((trendingTopic, key) => (
                      <TrendingTopicsItem
                        title={trendingTopic}
                        source='https://images.pexels.com/photos/633198/pexels-photo-633198.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.6&h=500&sharp=15&w=1400'
                        alt='TODO'
                        key={key}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
