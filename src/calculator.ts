/**
 * A class that provides basic arithmetic operations on two numbers.
 */
export class Calculator {
  private x: number;
  private y: number;

  /**
   * Initialize the Calculator class with two numbers.
   * @param x First number
   * @param y Second number
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Add the two numbers.
   * @returns The sum of x and y
   */
  addition(): number {
    return this.x + this.y;
  }

  /**
   * Subtract y from x.
   * @returns The difference between x and y
   */
  subtraction(): number {
    return this.x - this.y;
  }

  /**
   * Divide x by y.
   * @returns The quotient of x divided by y
   * @throws Error if y is zero
   */
  division(): number {
    if (this.y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return this.x / this.y;
  }

  /**
   * Multiply the two numbers.
   * @returns The product of x and y
   */
  multiplication(): number {
    return this.x * this.y;
  }
} 