import { CalculatorOperations } from '@modules/calculator/constants';
import { MathOperation } from '@modules/calculator/enums';
import {
  CalculationResult,
  CalculatorOperation,
} from '@modules/calculator/models';
import { useCallback, useState } from 'react';

export const useCalculatorForm = (
  onSumbit: (calculationResult: CalculationResult) => void
) => {
  const [operands, setOperands] = useState<number[]>([]);
  const [operation, setOperation] = useState<CalculatorOperation>();

  const onCalculate = useCallback(() => {
    if (operands.length < 2 || !operation) {
      return;
    }

    const value = operation?.operation(operands[0], operands[1]);

    onSumbit({
      id: Date.now(),
      result: value ?? 'N/A',
      operands,
      operation: operation as CalculatorOperation,
    });
  }, [operands, operation, onSumbit]);

  const onChangeOperation = useCallback((mathOperation: MathOperation) => {
    const tempOperation = CalculatorOperations.find(
      (_operation) => _operation.id === mathOperation
    );

    setOperation(tempOperation);
  }, []);

  const onSetOperands = useCallback((index: number, value: number) => {
    setOperands((currentOperands) => {
      const tempOperands = [...currentOperands];
      tempOperands[index] = value;

      return tempOperands;
    });
  }, []);

  return {
    onCalculate,
    onChangeOperation,
    onSetOperands,
    operands,
    operation,
    setOperands,
    setOperation,
  };
};
