// TASK 1

const degree = (number, degrees) => {
  let count = b;
  let c = 1;
  if (b == 0) {
    c = 1;
  } else {
    while (count > 0) {
      c = c * a;
      count--;
    }
  }
  return c;
};

let a = prompt("Введіть число:");
let b = prompt("Введіть ступінь числа:");
alert(`${a} в ступені ${b} = ${degree(a, b)}`);

// TASK 2

const greatestCommonDivisor = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

let numberOne = prompt("Введіть перше число:");
let numberTwo = prompt("Введіть Друге число:");
const result = greatestCommonDivisor(numberOne, numberTwo);
console.log(`НСД чисел ${numberOne} і ${numberTwo`  `}:`, result);

// TASK 3

const findMaxDigit = (number) => {
  const numberString = number.toString();
  let maxDigit = -1;
  for (let i = 0; i < numberString.length; i++) {
    const digit = parseInt(numberString[i], 10);
    if (digit > maxDigit) {
      maxDigit = digit;
    }
  }

  return maxDigit;
};

const number = prompt("Введіть число:");
const maxDigit = findMaxDigit(number);
alert(`Максимальна цифра в числі, ${number}, :, ${maxDigit}`);

// TASK 4

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const number = prompt("Введіть число:");
const isPrimeResult = isPrime(number);
alert(`Число ${number} є простим: ${isPrimeResult}`);

// TASK 5

const primeFactors = (n) => {
  const factors = [];
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
};

const number = prompt("Введіть число:");
const factors = primeFactors(number);
alert(`Множники числа ${number} у зростаючому порядку: ${factors.join(" * ")}`);

// TASK 6

function fibonacci(n) {
  if (n <= 0) {
    return "Порядковий номер має бути більше нуля.";
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    let prev = 1;
    let current = 1;
    let result = 0;
    for (let i = 3; i <= n; i++) {
      result = prev + current;
      prev = current;
      current = result;
    }
    return result;
  }
}
const number = prompt("Введіть порядковий номер числа Фібоначчі:");
const fibNumber = fibonacci(number);
alert(`Число Фібоначчі з порядковим номером ${number} дорівнює: ${fibNumber}`);
