/*// JS. HW_1

//  1. Создать переменную “item_1”
//  2. Присвоить переменной item_1 цифру 5.
//  3. Вывести в консоль item_1.
let item_1 = 5;
console.log(item_1);
//  4. Создать переменную “item_2”
//  5. Присвоить переменной item_2 цифру 3.
//  6. Вывести в консоль item_2.
let item_2 = 3;
console.log(item_2);
//  7. Создать переменную “item_3”
//  8. Присвоить переменной item_3 сложение item_1 и item_2.
//  9. Вывести в консоль item_3.
let item_3 = item_1 + item_2;
console.log(item_3);
//  10. Создать переменную “item_4”
//  11. Присвоить переменной item_4 строку “Yolochka”
//  12. Вывести в консоль item_4.
let item_4 = 'Yolochka';
console.log(item_4, typeof item_4);
//  13. Вывести в консоль сложение item_3 и item_4.
console.log(item_3 + item_4);
//  14. Вывести в консоль умножение item_3 и item_4.
console.log(item_3 * item_4);
//  15. Создать переменную “item_5”
//  16. Присвоить переменной item_5 переменную item_3
let item_5 = item_3;
//  17. Создать переменную item_6.
//  18. Создать переменную item_6_type
//  19. Присвоить переменной item_6 значение 15
//  20. Присвоить переменной item_6_type тип переменной item_6
let item_6 = 15;
let item_6_type = typeof item_6;
//  21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——
console.log("item_6 == ", item_6, "\nitem_6_type == ", item_6_type);
//  22. Создать переменную item_7 и в ней преобразовать item_6 в String.
//  23. Создать переменную item_7_type
//  24. Присвоить переменной item_7_type тип переменной item_7
//  25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——
let item_7 = String(item_6);
let item_7_type = typeof item_7;
console.log("item 7 == ", item_7, "\nitem 7 type == ", item_7_type);
*/

//  26. Создать переменную “age_1” и присвоить ей значение 10
//  27. Создать переменную “age_2” и присвоить ей значение 18
//  28. Создать переменную “age_3” и присвоить ей значение 60
//  29. Создать if в котором будите проверять значение переменной age_1
//  30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//  31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
//  32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//  33. Иначе выводите “Technical work”.


// setTimeout(age1, 3000);

// function age1(){
//   let age_1;
//   let string;

//   do {
//   string = prompt ("Введіть вік № 1", '');
//   if (string === null) {
//     alert('Ну якого біса? Будемо вводити чи будемо хєрнею страдати?');
//     }
//   else if (string.length === 0 || string === " ") {
//     alert('Ну не треба бавитись - введіть число!');
//     }
//   else {
//       age_1 = string;
//        }
//       } while(!string || !string.trim().length)
//   };

"use strict";

function ifAge(age1, age2, age3){
  if (age1 < age2){
    alert("Нажаль, Ви не маєте доступу, тому що Вам зараз " + age1 + " Це трохи замало! ");
    }
    else if(age1 >= age2 & age1 < age3){
          alert("Ласкаво Просимо !!!");
        }
        else{
          alert("Будьте спокійними та вірьте у ЗСУ !");
          }
        };

function agePrompt(){
    let string = "";
    do {
        string = prompt("Введіть значення віку ", "");
        if(!string){
            alert("Фі, яка ви некультурна скотиняка!");
            return;
        } else if (string.trim().length == 0){
            alert("Ну не треба бавитись - введіть вже число!");
        } else {
            return string;
        }
    } while (!string || !string.trim().length);
};

//setTimeout(agePrompt, 3000);

let age1 = agePrompt();
let age2 = agePrompt();
let age3 = agePrompt();

ifAge(age1, age2, age3);



// function age2(){
//     let string = "";
//     let age_2;
//     do {
//         string = prompt("Введіть вік № 2", "");
//         if(!string){
//             alert("Ну якого біса? Будемо вводити чи будемо хєрнею страдати?")
//         } else if (string.trim().length == 0){
//             alert("Ну не треба бавитись - введіть вже число!")
//         } else {
//             alert("Нарешті, ітіть-колотіть!")
//             age_2 = string;
//             alert(age_2);
//         }
//     } while (!string || !string.trim().length)
// }

// function age3(){
//     let string = "";
//     let age_3;
//     do {
//         string = prompt("Введіть вік № 3", "");
//         if(!string){
//             alert("Ну якого біса? Будемо вводити чи будемо хєрнею страдати?")
//         } else if (string.trim().length == 0){
//             alert("Ну не треба бавитись - введіть вже число!")
//         } else {
//             alert("Нарешті, ітіть-колотіть!")
//             age_3 = string;
//             alert(age_3);
//         }
//     } while (!string || !string.trim().length)
// }


// age1();
// age2();
// age3();
// ifAge();