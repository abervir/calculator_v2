import React from 'react';

import './CalculatorOperationsListItem.scss';

interface Props {
  title: string;
  icon: string;
}

export const CalculatorOperationsListItem = (props: Props) => {
  const { title, icon } = props;

  return (
    <div className='operation-label'>
      <i title={title} className={`icon ${icon}`}></i>
      <span>{title}</span>
    </div>
  );
};
