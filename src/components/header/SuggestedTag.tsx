import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  linkTo: string;
}

const SuggestedTag: FC<Props> = ({ title, linkTo }) => {
  return (
    <li>
      <Link className='suggested-tag' to={linkTo}>
        {title},
      </Link>
    </li>
  );
};

export default SuggestedTag;
