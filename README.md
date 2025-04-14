# Calculator SDK for Node.js

A simple SDK for performing basic arithmetic operations in Node.js.

## Installation

```bash
npm install @ndozor/calculator
```

## Usage

```typescript
import { Calculator } from '@ndozor/calculator';

// Create a calculator instance
const calculator = new Calculator(10, 5);

// Perform arithmetic operations
const sum = calculator.addition();        // Returns 15
const difference = calculator.subtraction(); // Returns 5
const product = calculator.multiplication(); // Returns 50
const quotient = calculator.division();     // Returns 2

// Handle division by zero
try {
  const zeroCalculator = new Calculator(10, 0);
  const result = zeroCalculator.division();
} catch (error) {
  console.error(error.message); // "Cannot divide by zero"
}
```

## Features

- Addition
- Subtraction
- Multiplication
- Division (with zero division protection)
- TypeScript support
- Comprehensive documentation

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test
```

## License

MIT License 