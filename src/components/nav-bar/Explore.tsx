import React, { useState } from 'react';
import ExploreItem from './ExploreItem';
import { Link } from 'react-router-dom';

const Explore = () => {
  const [isExpended, setIsExpended] = useState<boolean>(false);
  return (
    <div className='hide-when-smaller-1000'>
      <div className='nav-bar-explore-container'>
        <div className='nav-bar-explore-title'>
          <Link to='TODO'>
            <button
              className='nav-bar-explore-text'
              onMouseEnter={() => setIsExpended(true)}
              onMouseLeave={() => setIsExpended(false)}
            >
              Explore
            </button>
          </Link>
        </div>
        {isExpended && (
          <button
            className='explore-items-section-container'
            onMouseEnter={() => setIsExpended(true)}
            onMouseLeave={() => setIsExpended(false)}
          >
            <div className='explore-items-content-list-container'>
              <ul className='explore-items-content-list'>
                <ExploreItem linkTo='TODO' title='Discover Photos' />
                <ExploreItem linkTo='TODO' title='Popular Search' />
                <ExploreItem linkTo='TODO' title='Leaderboard' />
                <ExploreItem linkTo='TODO' title='Free Videos' />
                <ExploreItem linkTo='TODO' title='Pexels Blog' />
              </ul>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Explore;
