import { CalculatorOperations } from '@modules/calculator/constants';
import { MathOperation } from '@modules/calculator/enums';
import { CalculationResult } from '@modules/calculator/models';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCalculatorForm } from './useCalculatorForm';

const onSubmitCallback = jest.fn((_: CalculationResult) => {});

describe('useCalculatorForm', () => {
  it('onChangeOperation should save current operation in state', () => {
    const { result } = renderHook(() => useCalculatorForm(onSubmitCallback));
    act(() => {
      result.current.onChangeOperation(MathOperation.PLUS);
    });

    const expectedValue = CalculatorOperations.find(
      (operation) => operation.id === MathOperation.PLUS
    );
    expect(result.current.operation).toBe(expectedValue);
  });

  it('onSetOperands should set operands', async () => {
    const { result } = renderHook(() => useCalculatorForm(onSubmitCallback));
    act(() => {
      result.current.onSetOperands(0, 1);
    });

    expect(result.current.operands).toEqual([1]);

    act(() => {
      result.current.onSetOperands(1, 2);
    });

    expect(result.current.operands).toEqual([1, 2]);
  });

  it('onCalculate should create final calculation result', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCalculatorForm(onSubmitCallback)
    );
    const operands = [1, 2];
    const calculatorOperation = CalculatorOperations[0];

    await act(async () => {
      result.current.setOperation(calculatorOperation);
      result.current.setOperands(operands);
      await waitForNextUpdate();
      result.current.onCalculate();
    });

    const expectedResult = {
      id: expect.any(Number),
      operands: result.current.operands,
      operation: calculatorOperation,
      result: calculatorOperation.operation(operands[0], operands[1]),
    };

    expect(onSubmitCallback).toHaveBeenCalledWith(expectedResult);
  });

  it('onCalculate should not create final calculation result if operands are empty', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCalculatorForm(onSubmitCallback)
    );

    const calculatorOperation = CalculatorOperations[0];

    await act(async () => {
      result.current.setOperation(calculatorOperation);
      await waitForNextUpdate();
      result.current.onCalculate();
    });

    expect(onSubmitCallback).not.toHaveBeenCalled();
  });

  it('onCalculate should not create final calculation result if there is no operation', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCalculatorForm(onSubmitCallback)
    );
    const operands = [1, 2];

    await act(async () => {
      result.current.setOperands(operands);
      await waitForNextUpdate();
      result.current.onCalculate();
    });

    expect(onSubmitCallback).not.toHaveBeenCalled();
  });
});
