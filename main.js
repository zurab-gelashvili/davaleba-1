/// davaleba 1

function myfunction1(a, b) {
  if (a === b) {
    return "equal";
  } else {
    return "not equal";
  }
}

console.log(myfunction1(100, "asi"))
console.log(myfunction1(100, 100))


/// davaleba 2 

function myfunction2(fahrenheit) {
  if (typeof fahrenheit === `number`) {
    let celsius = (5 / 9) * (fahrenheit - 32) + " °C";
    return celsius

  } else {
    return false
  }
}

console.log(myfunction2(250))
console.log(myfunction2(20))




///3

function myfunction3 (a, b, op) {
  if (typeof a !== 'number' || typeof b !== 'number' || !/^[+\-*/]$/.test(op)) {
    return false;
  }
  
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
      return false;
  }
}


console.log(myfunction3(5, 3, '+')); 
console.log(myfunction3(10, 4, '-')); 
console.log(myfunction3(7, 2, '*')); 
console.log(myfunction3(8, 0, '/')); 
console.log(myfunction3(8, 2, '/')); 
console.log(myfunction3(4, 6, '%'));
