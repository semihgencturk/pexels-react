import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  linkTo: string;
}

const ExploreItem: FC<Props> = ({ title, linkTo }) => {
  return (
    <li className='explore-list-item-container'>
      <Link className='explore-list-item' to={linkTo}>
        {title}
      </Link>
    </li>
  );
};

export default ExploreItem;
