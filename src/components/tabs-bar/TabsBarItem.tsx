import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  linkTo: string;
}

const TabsBarItem: FC<Props> = ({ title, linkTo }) => {
  //const linkPath: string = { title }.toString().toLowerCase();

  return (
    <li className='tab-bar-item-container'>
      <Link className='tab-bar-item' to={linkTo}>
        {title}
      </Link>
    </li>
  );
};

export default TabsBarItem;
