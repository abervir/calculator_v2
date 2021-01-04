export class MathUtils {
  static getHighestPrimeNumberBetweenTwoNumbers(
    minValue: number,
    maxValue: number
  ): number | null {
    let primeNumber = null;

    for (var i = minValue; i <= maxValue; i++) {
      if (MathUtils.isPrime(i)) {
        primeNumber = i;
      }
    }

    return primeNumber;
  }

  static isPrime(value: number): boolean {
    if (value < 2) {
      return false;
    }

    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }

    return true;
  }

  static remainderOfDivision(a: number, b: number): number {
    return a % b;
  }

  static divide(a: number, b: number): number {
    return a / b;
  }

  static sum(a: number, b: number): number {
    return a + b;
  }
}
