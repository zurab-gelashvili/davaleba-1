/// davaleba 1

function myfunction1(a, b) {
  if (a === b) {
    return "equal";
  } else {
    return "not equal";
  }
}

console.log(myfunction1(100, "asi"))


/// davaleba 2 

function myfunction2(fahrenheit) {
  if (typeof fahrenheit === `number`) {
    return (5 / 9) * (fahrenheit - 32) + " °C"

  } else {
    return false
  }
}

console.log(myfunction2(150))




///3

function performOperation(a, b, op) {
  // Check if a and b are numbers and op is a valid operation
  if (typeof a !== 'number' || typeof b !== 'number' || !/^[+\-*/]$/.test(op)) {
    return false; // Return false if any input is invalid
  }

  // Perform the specified operation and return the result
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return 'Division by zero is not allowed';
      }
      return a / b;
    default:
      return false; // Return false for unknown operation
  }
}

// Example usage:
console.log(performOperation(5, 3, '+')); // Output: 8
console.log(performOperation(10, 4, '-')); // Output: 6
console.log(performOperation(7, 2, '*')); // Output: 14
console.log(performOperation(8, 0, '/')); // Output: "Division by zero is not allowed"
console.log(performOperation(4, 6, '%')); // Output: false
