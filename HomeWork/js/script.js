// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let a = 1;
// let b = 0;
// let c = -3;

// console.log(a > 0);
// console.log(b > 0);
// console.log(c > 0);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let variable = "test";
// if (variable === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (variable === "qwerty") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let variable;
// variable = 1;
// if (variable > 10) {
//   console.log((variable -= 5));
// } else {
//   console.log((variable += 5));
// }

// variable = 10;
// if (variable > 10) {
//   console.log((variable -= 5));
// } else {
//   console.log((variable += 5));
// }

// variable = 13;
// if (variable > 10) {
//   console.log((variable -= 5));
// } else {
//   console.log((variable += 5));
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let monthNumber = +prompt("Введите значение от 1 до 12");

// switch (monthNumber) {
//   case 1: {
//     console.log("Январь");
//     break;
//   }
//   case 2: {
//     console.log("Февраль");
//     break;
//   }
//   case 3: {
//     console.log("Март");
//     break;
//   }
//   case 4: {
//     console.log("Апрель");
//     break;
//   }
//   case 5: {
//     console.log("Май");
//     break;
//   }
//   case 6: {
//     console.log("Июнь");
//     break;
//   }
//   case 7: {
//     console.log("Июль");
//     break;
//   }
//   case 8: {
//     console.log("Август");
//     break;
//   }
//   case 9: {
//     console.log("Сентябрь");
//     break;
//   }
//   case 10: {
//     console.log("Октябрь");
//     break;
//   }
//   case 11: {
//     console.log("Ноябрь");
//     break;
//   }
//   case 12: {
//     console.log("Декабрь");
//     break;
//   }
//   default:
//     console.log("Введите значение от 1 до 12");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let number = +prompt("Введите трёхзначное число от 100 до 999");

// if (number >= 100 && number <= 999) {
//   let sum =
//     Math.floor(number / 100) + Math.floor((number % 100) / 10) + (number % 10);
//   console.log(sum);
// }
