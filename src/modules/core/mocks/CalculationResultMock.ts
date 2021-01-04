import { OperationIcons } from '@modules/calculator/enums';
import { CalculationResult } from '@modules/calculator/models';

export const CalculationResultMock: CalculationResult = {
  id: 1,
  result: 1,
  operands: [0, 1],
  operation: {
    id: 'ID',
    title: 'Operation1',
    icon: OperationIcons.PLUS,
    sign: '+',
    operation: (a: number, b: number) => a + b,
  },
};
