import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  linkTo: string;
}

const DropdownItem: FC<Props> = ({ title, linkTo }) => {
  return (
    <li className='dropdown-list-item-container'>
      <Link className='dropdown-list-item' to={linkTo}>
        {title}
      </Link>
    </li>
  );
};

export default DropdownItem;
