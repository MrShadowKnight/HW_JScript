// TASK 1

let userName = prompt("Введіть своє ім'я:");
alert(`Привіт, ${userName}!`);

// TASK 2

let userYear = prompt("Введіть свій рік народження:");
let year = 2023;
let userAge = year - userYear;
alert(`Вам ${userAge} років`);

// TASK 3

let square = prompt("Введіть сторону квадрата:");
let squarePerimeter = square * 4;
alert(`Периметр квадрата: ${squarePerimeter}`);

// TASK 4

let radius = prompt("Введіть радіус кола:");
let circleArea = 3.14 * radius * radius;
alert(`Площа кола: ${circleArea.toFixed(2)}`);

// TASK 5

let distance = prompt("Введіть відстань між містами (в км):");
let time = prompt("Введіть чаc за який хочете пройти його (в год):");
let speed = distance / time;
alert(`Вам треба йти зі швидкість: ${speed.toFixed(2)} км/год`);

// TASK 6

let userMoney = prompt("Введіть суму коштів (в доларах):");
let conversion = 0.94;
let euro = userMoney * conversion;
alert(`Ви отримаєте: ${euro.toFixed(2)} євро`);

// TASK 7

let userFlashDrive = prompt("Введіть кількість пам'яті на флешці (в ГБ):");
let userMemory = 1024 * userFlashDrive;
let file = 820;
let files = userMemory / file;
alert(
  `На флешку ви можете завантижити тільки: ${files.toFixed(
    0
  )} файліф розміром 820 МБ`
);

// TASK 8

let walletAmount = parseFloat(prompt("Введіть суму грошей у вашому гаманці:"));
let chocolatePrice = parseFloat(prompt("Введіть вартість однієї шоколадки:"));
let chocolatesBought = Math.floor(walletAmount / chocolatePrice);
let change = walletAmount - chocolatesBought * chocolatePrice;
alert(
  "Ви можете купити " +
    chocolatesBought +
    " шоколадок, і у вас залишиться " +
    change.toFixed(2) +
    " грн на здачу."
);

// TASK 9

let inputNumber = parseInt(prompt("Введіть тризначне число:"));
if (inputNumber >= 100 && inputNumber <= 999) {
  let firstDigit = Math.floor(inputNumber / 100);
  let lastTwoDigits = inputNumber % 100;
  let secondDigit = Math.floor(lastTwoDigits / 10);
  let thirdDigit = lastTwoDigits % 10;
  let palindrome = thirdDigit * 100 + secondDigit * 10 + firstDigit;
  alert("Паліндром числа " + inputNumber + " - це " + palindrome);
} else {
  alert("Будь ласка, введіть тризначне число.");
}

// TASK 10

const number = parseInt(prompt("Введіть ціле число:"));
const result = number % 2 === 0 ? "парне" : "непарне";
alert(`Ви ввели число ${number}, яке є ${result}.`);
