function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result1 = add(1, 2); // Correct usage
console.log(result1); // Output: 3

try {
  const result2 = add(1, '2'); // Incorrect usage
} catch (error) {
  console.error(error.message); // Output: Both arguments must be numbers
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a, 10) : a;
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Arguments cannot be converted to numbers');
  }
  return numA + numB;
}
const result3 = addSafe(1, '2');
console.log(result3); // Output: 3