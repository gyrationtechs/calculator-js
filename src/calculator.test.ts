import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator(10, 5);
  });

  test('addition', () => {
    expect(calculator.addition()).toBe(15);
  });

  test('subtraction', () => {
    expect(calculator.subtraction()).toBe(5);
  });

  test('multiplication', () => {
    expect(calculator.multiplication()).toBe(50);
  });

  test('division', () => {
    expect(calculator.division()).toBe(2);
  });

  test('division by zero throws error', () => {
    const zeroCalculator = new Calculator(10, 0);
    expect(() => zeroCalculator.division()).toThrow('Cannot divide by zero');
  });
}); 