//  === Переменные  ===
// let - изменяемые Переменные
// const - неизменяемые Переменные
//let first = 1; //Задали переменнyю first, дали значение 1.
//Объявление переменной без присваивания значения
//  let first;

let first = 1;
let second = 3;

console.log(first);
console.log(second);
//Вывод информации в консоль.
//console.log(first + second);

//  === Типы данных ===
// string - строка
// number - число
// boolean - true/false
// null
// undefined
// bigint - можно безопасно хранить и обрабатывать большие целые числа даже за пределами максимального безопасного целочисленного значения Number
// object
// typeof(variable)

let num = 3.14;
let str = "hello"
console.log(typeof(num));
console.log(typeof(str));

let str2 = 'abc';
let str3 = "def";
let str4 =  ghi
console.log(str2, str3, str4);

//  == string concatenation

let concat = str2 + str3 + str4;
console.log(concat);
let concat2 = str2 + " " + str3 + " " + str4;
console.log(concat2);

let name = 'Ivan';
console.log('My name is ' + name);
//  ${name}
//console.log( My name is ${name} );

//  == длина строки, индекс букв ===

let str5 = "This world is beautiful!";
//str.length - считает количество символов.(имя строки(str)+lenght)
console.log(str5.length);
console.log(str5[6]); // - нашли 6 символ; счет идет с 0
console.log(typeof(str5[8])); // - тип символа


//string.toUpperCase(); - все буквы заглавные
console.log(str5.toUpperCase());
//string.toLowerCase(); - все буквы маленький регистр
console.log(str5.toLowerCase());

// ++ увеличивает на +1 , -- уменьшает на -1
let a = 5;
let b = 7;
console.log(++a);
console.log(--a);
console.log(++b);
console.log(--b);

// == boolean ==
let bool = true;
let bool2 = false;
console.log(bool, bool2);
console.log(typeof bool);

// == операторы сравнения ==( не строгое равенство) ===(строгое равенство) != !==< ><= >=
let v = 5;
bool = (v == 5);
console.log(bool);
bool = (v === 5);
console.log(bool);

bool = (v == "5");
console.log(bool);
bool = (v === "5");
console.log(bool);