import React from 'react';
import TabsBarItem from './TabsBarItem';

const TabsBar = () => {
  return (
    <div className='tab-bar-items-container'>
      <ul className='tab-bar-items'>
        <TabsBarItem linkTo='/' title='Home' />
        <TabsBarItem linkTo='/discover' title='Discover' />
        <TabsBarItem linkTo='/videos' title='Videos' />
        <TabsBarItem linkTo='/leaderboard' title='Leaderboard' />
        <TabsBarItem linkTo='/challenges' title='Challenges' />
      </ul>
    </div>
  );
};

export default TabsBar;
