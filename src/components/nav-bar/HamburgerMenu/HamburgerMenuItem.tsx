import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  linkTo: string;
}

const HamburgerMenuItem: FC<Props> = ({ title, linkTo }) => {
  return (
    <div className='ExploreItem'>
      <li>
        <Link to={linkTo}>{title}</Link>
      </li>
    </div>
  );
};

export default HamburgerMenuItem;
