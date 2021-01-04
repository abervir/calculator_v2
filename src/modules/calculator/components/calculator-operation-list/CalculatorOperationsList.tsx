import React from 'react';

import ReactDropdown from 'react-dropdown';
import { CalculatorOperations } from '@modules/calculator/constants';
import { MathOperation } from '@modules/calculator/enums';
import { CalculatorOperationsListItem } from '../calculator-operation-list-item/CalculatorOperationsListItem';

interface Props {
  onChangeOperation: (value: MathOperation) => void;
}

export const CalculatorOperationsList = (props: Props) => {
  const { onChangeOperation } = props;

  const dropdownOptions = () => {
    return CalculatorOperations.map(({ id, title, icon }) => ({
      value: id.toString(),
      label: <CalculatorOperationsListItem title={title} icon={icon} />,
    }));
  };

  return (
    <div className='calculator-operations-list'>
      <ReactDropdown
        onChange={({ value }) => onChangeOperation(value as MathOperation)}
        options={dropdownOptions()}
        placeholder='Select an option'
      />
    </div>
  );
};
