import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  subtitle: string;
  source: string;
  alt: string;
}

const CollectionsItem: FC<Props> = ({ title, subtitle, source, alt }) => {
  return (
    <li>
      <Link className='collections-item' to='TODO'>
        <div className='collection-item-images'>
          <img className='collections-item-image' src={source} alt={alt} />
          <img className='collections-item-image' src={source} alt={alt} />
          <img className='collections-item-image' src={source} alt={alt} />
        </div>
        <div className='collections-item-text'>
          <span className='collections-item-title'>{title}</span>
          <span className='collections-item-subtitle'>{subtitle}</span>
        </div>
      </Link>
    </li>
  );
};

export default CollectionsItem;
