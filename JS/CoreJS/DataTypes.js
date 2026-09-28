var name1 = "John Doe";
var age = 25;
var isStudent = true;

console.log("Name: " + name1 +"  --->  " + "type: " + typeof name1);
console.log("Age: " + age +" ----> " +  "type: " + typeof age);
console.log("Is Student: " + isStudent +"  ---->  " + "type: " + typeof isStudent);

var name1 =  'Amar';
console.log("Variable declaration : name : "+name1 + "  --->  " + "type: " + typeof name1);
var name1 = `Arun`;// Backtick
console.log("Variable declaration : name : "+name1 + "  --->  " + "type: " + typeof name1);

// Number

var num1 = 100;
var num2 = 100.5;
var num3 = 1e5; // 1 * 10^5
console.log("Variable declaration : num1 : "+num1 + "  --->  " + "type: " + typeof num1);
console.log("Variable declaration : num2 : "+num2 + "  --->  " + "type: " + typeof num2);
console.log("Variable declaration : num3 : "+num3 + "  --->  " + "type: " + typeof num3);

// bigInt 

var bigIntNum = 1234567890123456789012345678901234567890n; // BigInt literal
console.log("Variable declaration : bigIntNum : "+bigIntNum + "  --->  " + "type: " + typeof bigIntNum);
var bigIntNum2 = BigInt(767); // BigInt constructor
console.log("Variable declaration : bigIntNum2 : "+bigIntNum2 + "  --->  " + "type: " + typeof bigIntNum2);
var bigIntNum3 = BigInt("7576"); // BigInt from string
console.log("Variable declaration : bigIntNum3 : "+bigIntNum3 + "  --->  " + "type: " + typeof bigIntNum3);

// Undefined

var xykjdj;
console.log("Variable declaration : xykjdj : "+xykjdj + "  --->  " + "type: " + typeof xykjdj);

// Null 

var x = null;
console.log("Variable declaration : x : "+x + "  --->  " + "type: " + typeof x);

//  Symbol - Used to create a unique value. Each time you create a new symbol, it is guaranteed to be unique.

const sym1 = Symbol('foo');
const sym2 = Symbol('foo');

console.log(sym1.toString()
); // "Symbol(foo)"

// console.log("Variable declaration : sym1 : "+sym1 + "  --->  " + "type: " + typeof sym1);
// console.log("Variable declaration : sym2 : "+sym2 + "  --->  " + "type: " + typeof sym2);
console.log("Are sym1 and sym2 equal? " + (sym1 === sym2)); // false


// ==== Non - Prmitive Data Types ====== //

// 1. Object:

var x =10;


var arry = [10, 20, 30]
var array = ["Apple", "Banana", "Cherry"];


var arry = ["Apple", 10, true, null, undefined, {name: "John"}, [1, 2, 3]];

console.log(arry)
console.log(arry[0])
console.log(arry[1])
console.log(arry[2])
console.log(arry[3])
console.log(arry[4])
console.log(arry[5])
console.log(arry[6])

// console.log(arry[0]);
// console.log(arry[1]);
// console.log(arry[2]);

// var arry = new Array(89, 34, 21);
// console.log(arry[0]);
// console.log(arry[1]);
// console.log(arry[2]);


var person = {

    name: "John",
    age: 30,
    isStudent: true,
    marks:[10, 30, 50]
}

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.marks);

function addition(){



}


