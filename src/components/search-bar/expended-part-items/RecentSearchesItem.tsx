import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

interface Props {
  title: string;
}

const RecentSearchesItem: FC<Props> = ({ title }) => {
  return (
    <li>
      <Link className='recent-searches-item' to='TODO'>
        <div className='recent-searches-item-text'>
          <span>{title}</span>
        </div>
        <div className='recent-searches-item-icon-container'>
          <IoSearch className='recent-searches-item-icon' />
        </div>
      </Link>
    </li>
  );
};

export default RecentSearchesItem;
