import React from 'react';

import { Button, Input } from '@modules/shared/components';
import { useCalculatorForm } from '@modules/calculator/hooks';
import { CalculationResult } from '@modules/calculator/models';
import { CalculatorOperationsList } from '../calculator-operation-list/CalculatorOperationsList';

import './CalculatorForm.scss';

interface Props {
  onSumbit: (calculationResult: CalculationResult) => void;
}

export const CalculatorForm = (props: Props) => {
  const { onCalculate, onChangeOperation, onSetOperands } = useCalculatorForm(
    props.onSumbit
  );

  return (
    <div className='calculator-form'>
      <div className='inputs'>
        <Input
          placeholder='Operand 1'
          isNumbersOnly
          onChange={(value) => onSetOperands(0, Number(value))}
        />
        <CalculatorOperationsList onChangeOperation={onChangeOperation} />
        <Input
          placeholder='Operand 2'
          isNumbersOnly
          onChange={(value) => onSetOperands(1, Number(value))}
        />
      </div>
      <Button title='Calculate' onClick={onCalculate} />
    </div>
  );
};
