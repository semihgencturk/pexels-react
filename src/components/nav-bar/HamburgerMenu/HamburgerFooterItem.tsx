import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  logoImageSource: string;
  logoImageDescription: string;
  linkTo: string;
}

const HamburgerFooterItem: FC<Props> = ({
  logoImageSource,
  logoImageDescription,
  linkTo,
}) => {
  return (
    <div className='HamburgerFooterItemContainer'>
      <li>
        <Link to={linkTo}>
          <img
            className='HamburgerFooterItem'
            src={logoImageSource}
            alt={logoImageDescription}
          />
        </Link>
      </li>
    </div>
  );
};

export default HamburgerFooterItem;
