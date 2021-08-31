import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  logoImageSource: string;
  logoImageDescription: string;
  linkTo: string;
}

const DropdownFooterItem: FC<Props> = ({
  logoImageSource,
  logoImageDescription,
  linkTo,
}) => {
  return (
    <div className='dropdown-list-footer-item-container'>
      <li>
        <Link to={linkTo}>
          <img
            className='dropdown-list-footer-item'
            src={logoImageSource}
            alt={logoImageDescription}
          />
        </Link>
      </li>
    </div>
  );
};

export default DropdownFooterItem;
