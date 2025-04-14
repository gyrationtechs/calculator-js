import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator(10, 5);
  });

  it('should add two numbers correctly', () => {
    expect(calculator.addition()).toBe(15);
  });

  it('should subtract two numbers correctly', () => {
    expect(calculator.subtraction()).toBe(5);
  });

  it('should multiply two numbers correctly', () => {
    expect(calculator.multiplication()).toBe(50);
  });

  it('should divide two numbers correctly', () => {
    expect(calculator.division()).toBe(2);
  });

  it('should throw error when dividing by zero', () => {
    const zeroCalculator = new Calculator(10, 0);
    expect(() => zeroCalculator.division()).toThrow('Cannot divide by zero');
  });
}); 