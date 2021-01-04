import { MathUtils } from './math.utils';

describe('MathUtils', () => {
  it('remainderOfDivision should return remaind of division of two operands', () => {
    const operand1 = 10;
    const operand2 = 3;
    const expected = operand1 % operand2;

    expect(MathUtils.remainderOfDivision(operand1, operand2)).toBe(expected);
  });

  it('divide should return division of two operands', () => {
    const operand1 = 10;
    const operand2 = 5;
    const expected = operand1 / operand2;

    expect(MathUtils.divide(operand1, operand2)).toBe(expected);
  });

  it('sum should return sum of two operands', () => {
    const operand1 = 10;
    const operand2 = 5;
    const expected = operand1 + operand2;

    expect(MathUtils.sum(operand1, operand2)).toBe(expected);
  });

  it('getHighestPrimeNumberBetweenTwoNumbers should return highest prime number between two operands', () => {
    const operand1 = 1;
    const operand2 = 10;
    const expected = 7;

    expect(
      MathUtils.getHighestPrimeNumberBetweenTwoNumbers(operand1, operand2)
    ).toBe(expected);
  });

  it('getHighestPrimeNumberBetweenTwoNumbers should return null if the operand1 more then operand2', () => {
    const operand1 = 10;
    const operand2 = 1;
    const expected = null;

    expect(
      MathUtils.getHighestPrimeNumberBetweenTwoNumbers(operand1, operand2)
    ).toBe(expected);
  });

  [
    {
      value: 5,
      expected: true,
    },
    {
      value: 9,
      expected: false,
    },
  ].forEach(({ value, expected }) => {
    const shouldReturn = expected ? '' : 'not';

    it(`isPrime should return ${expected} if value is ${shouldReturn} prime number`, () => {
      expect(MathUtils.isPrime(value)).toBe(expected);
    });
  });
});
