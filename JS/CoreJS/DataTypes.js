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



