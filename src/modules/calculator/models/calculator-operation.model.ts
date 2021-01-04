import { OperationIcons } from '../enums';

export interface CalculatorOperation {
  id: string;
  title: string;
  icon: OperationIcons;
  sign: string;
  operation: (a: number, b: number) => number | null;
}
