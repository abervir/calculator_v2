import { MathUtils } from '@modules/core/utils';
import { MathOperation, OperationIcons } from '../enums';
import { CalculatorOperation } from '../models';

export const CalculatorOperations: CalculatorOperation[] = [
  {
    id: MathOperation.PLUS,
    icon: OperationIcons.PLUS,
    operation: MathUtils.sum,
    sign: '+',
    title: 'Sum',
  },
  {
    id: MathOperation.DIVIDE,
    icon: OperationIcons.DIVIDE,
    operation: MathUtils.divide,
    sign: '/',
    title: 'Divide',
  },
  {
    id: MathOperation.REMAINDER_OF_DIVISION,
    icon: OperationIcons.REMAINDER_OF_DIVISION,
    operation: MathUtils.remainderOfDivision,
    sign: '%',
    title: 'Remainder of a division',
  },
  {
    id: MathOperation.MAX_PRIME_NUMBER,
    icon: OperationIcons.PRIME_NUMBER,
    operation: MathUtils.getHighestPrimeNumberBetweenTwoNumbers,
    sign: 'P',
    title: 'Max prime number between two operands',
  },
];
