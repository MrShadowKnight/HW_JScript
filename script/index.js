//  TASK 1

let userAge = prompt("Введіть свій вік: ");
if (userAge >= 0 && userAge < 12) {
  alert("Ви являєтеся дитиною!");
} else if (userAge >= 12 && userAge < 18) {
  alert("Ви являєтеся підлітком!");
} else if (userAge >= 18 && userAge < 60) {
  alert("Ви являєтеся дорослим!");
} else if (userAge >= 60) {
  alert("Ви являєтеся пенсіонером!");
} else {
  alert("Вік не може бути меньше 0!");
}

//  TASK 2

let userNum = prompt("Введіть число (Від 0 до 9): ");
if (userNum == 0) {
  alert(")");
} else if (userNum == 1) {
  alert("!");
} else if (userNum == 2) {
  alert("@");
} else if (userNum == 3) {
  alert("#");
} else if (userNum == 4) {
  alert("$");
} else if (userNum == 5) {
  alert("%");
} else if (userNum == 6) {
  alert("^");
} else if (userNum == 7) {
  alert("&");
} else if (userNum == 8) {
  alert("*");
} else if (userNum == 9) {
  alert("(");
} else {
  alert("Даного числа немає у виборі!");
}

//  TASK 3

const userInput = prompt("Введіть тризначне число:");
if (userInput.length === 3) {
  const digits = userInput.split("").map(Number);
  if (
    digits[0] === digits[1] ||
    digits[1] === digits[2] ||
    digits[0] === digits[2]
  ) {
    alert("У введеному числі є однакові цифри.");
  } else {
    alert("У введеному числі немає однакових цифр.");
  }
} else {
  alert("Введено неправильне число. Будь ласка, введіть тризначне число.");
}

//  TASK 4

let userYear = parseInt(prompt("Введіть рік:"));
if (userYear % 400 === 0 || (userYear % 4 === 0 && userYear % 100 !== 0)) {
  alert(`${userYear} є високосним роком.`);
} else {
  alert(`${userYear} не є високосним роком.`);
}

//  TASK 5

let userNumber = prompt("Введіть п'ятизначне число:");
if (userNumber.length === 5) {
  const digits = userNumber.split("").map(Number);
  if (digits[0] === digits[4] && digits[1] === digits[3]) {
    alert("Число є палиндромом.");
  } else {
    alert("Число не є палиндромом.");
  }
} else {
  alert("Введено неправильне число. Будь ласка, введіть п'ятизначне число.");
}

//  TASK 6

let userMoney = prompt("Введіть суму грошей(в доларах):");
if (userMoney > 0) {
  let currency = prompt(
    "Введіть валюту(Обов'язково великими літерами)(AZN, EUR, UAH):"
  );
  if (currency == "AZN") {
    let moneyExchanged = userMoney * 1.7;
    alert(`Ви отримали: ${moneyExchanged} Азербайджанський манат.`);
  } else if (currency == "EUR") {
    let moneyExchanged = userMoney * 0.94;
    alert(`Ви отримали: ${moneyExchanged} євро.`);
  } else if (currency == "UAH") {
    let moneyExchanged = userMoney * 36.8;
    alert(`Ви отримали: ${moneyExchanged} гривні.`);
  } else {
    alert("Непривильно введена валюта.");
  }
} else {
  alert("Введено неправильне число. Будь ласка, введіть суму грошей.");
}

//  TASK 7

let cost = prompt("Введіть вартість товарувід для визначення знижки");
if (cost >= 0 && cost < 200) {
  alert(`Ваш товар немає знижки. Ціна товару: ${cost}`);
} else if (cost >= 200 && cost < 300) {
  alert(`Ваш товар має знижку 3%. Ціна товару: ${cost * 0.97}`);
} else if (cost >= 300 && cost < 500) {
  alert(`Ваш товар має знижку 5%. Ціна товару: ${cost * 0.95}`);
} else if (cost >= 500) {
  alert(`Ваш товар має знижку 7%. Ціна товару: ${cost * 0.93}`);
} else {
  alert("Товар не може мати від'ємну ціну!");
}

// TASK 8

const circleLength = parseFloat(prompt("Введіть довжину кола:"));
const squarePerimeter = parseFloat(prompt("Введіть периметр квадрата:"));
const circleRadius = circleLength / (2 * 3.14);
const squareSideLength = squarePerimeter / 4;
if (circleRadius <= squareSideLength / 2) {
  console.log("Коло може поміститися у квадрат.");
} else {
  console.log("Коло не може поміститися у квадрат.");
}

// TASK 9

alert("Ви почали вікторину!");
let taskOne = prompt(
  "1/3 Коли Україна стала незалежною?\n 1. 24 серпня 1991 року\n 2. 20 Вересня 1991 року\n 3. 24 серпня 1992 року"
);
let count = 0;
let ansver = 0;
if (taskOne == "1") {
  alert("Правильно!");
  count = count + 2;
  ansver = ansver + 5;
} else if (taskOne == "2" || taskOne == "3") {
  alert("Неправильно!");
} else {
  alert("Такої відповіді немає!");
}
let taskTwo = prompt(
  "2/3 Як побатькові наш викладач?\n 1. Андрійович\n 2. Романович\n 3. Іванович"
);
if (taskTwo == "2") {
  alert("Правильно!");
  count = count + 2;
  ansver = ansver + 4;
} else if (taskTwo == "1" || taskTwo == "3") {
  alert("Неправильно!");
} else {
  alert("Такої відповіді немає!");
}
let taskThree = prompt(
  "3/3 Що я люблю читати?\n 1. Фанфіки\n 2. Фантастика\n 3. Філософія"
);
if (taskThree == "1") {
  alert("Правильно!");
  count = count + 2;
  ansver = ansver + 3;
} else if (taskThree == "2" || taskThree == "3") {
  alert("Неправильно!");
} else {
  alert("Такої відповіді немає!");
}
alert(`Ваш результат: ${count}. Ваша оцінка: ${ansver}`);

// TASK 10

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
function getNextDate(day, month, year) {
  const daysInMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
    return "Неправильна дата";
  }
  if (day < daysInMonth[month - 1]) {
    return `${day + 1}.${month}.${year}`;
  } else if (month < 12) {
    return `1.${month + 1}.${year}`;
  } else {
    return `1.1.${year + 1}`;
  }
}
const inputDate = prompt("Введіть дату у форматі 'день.місяць.рік':");
const [day, month, year] = inputDate.split(".").map(Number);
const nextDate = getNextDate(day, month, year);

alert(`Наступна дата: ${nextDate}`);
