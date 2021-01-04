import { CalculatorOperation } from './calculator-operation.model';

export interface CalculationResult {
  id: number;
  result: number | string;
  operands: number[];
  operation: CalculatorOperation;
}
