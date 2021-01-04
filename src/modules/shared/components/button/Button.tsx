import React from 'react';

import './Button.scss';

export interface Props {
  title: string;
  onClick: () => void;
}

export const Button = (props: Props) => {
  const { title, onClick } = props;

  return (
    <button className='button' onClick={onClick}>
      {title}
    </button>
  );
};
