import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  source: string;
  alt: string;
}

const TrendingTopicsItem: FC<Props> = ({ title, source, alt }) => {
  return (
    <li>
      <Link className='trending-topics-item' to='TODO'>
        <img className='trending-topics-item-image' src={source} alt={alt} />
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default TrendingTopicsItem;
