// console.log('helloworld')
//03 Variables in TypeScript 
/* let num = 100;

 num = 1000;// change the value to
// num = 'pampapathi'//Type 'string' is not assignable to type 'number', strongly typed

const str = 'Hello world'// initialize must be const
// str = "pampa";


console.log(num,str) */
//04 Datatypes in TypeScript 
/* String Number Boolean */
/* const str2 = 'pampapathi';
const str1: string = 'pampapathi';
const str3 = `pampapathhi  ${str1}`;// back ticks / for the multipl lines

console.log(str2,str1,str3)

// number

let num = 12;// saveed in the memory floating point number 12.0

const pi = 3.12;

// boolean

let isEligible = true;
let isEqual = false;// truthy and falsey values, 0,empty string, null, undefined are falsy values

console.log(Boolean(0));

console.log(Boolean(100), Boolean(''), Boolean(null), Boolean('hello'));

let isGreater = 10 > 15;// result as boolean type based on the condition
console.log(isGreater) */
/* 05 Type Assignment & Type Inference */
/* function sum(num1: number, num2:number, isPrint:boolean, msg:string){
    if(isPrint){
        let s = num1 + num2;
        console.log(msg+'' +s)
    }
    return num1 + num2;
}

let n1 = 10;
let n2 = '20';// type inference, which we have initilize the value
//n2 = 'pampa'// error Type 'string' is not assignable to type 'number'.



console.log(sum(12,13,true, "sum is ="));
console.log(n1,n2); */
//console.log(sum('12',13))// string value and number will continate
//Argument of type 'string' is not assignable to parameter of type 'number
/* 06 Object Type in TypeScript  */
/* let person = {
    name: 'John',
    age: 30,
    gender: 'female',
}// type object doing type inference
// using a object

let person1 = {
    name: 'John',
    age: 30,
    gender: 'female',
}

let person2: {name:string,age:number} = { // explicty specifying
    name: 'John',
    age: 30,
    // gender: 'female',
}

person = {name: 'mark', age: 32, gender: 'male'}//Object literal may only specify known properties, and 'gender' does not exist in type '{ name: string; age: number; }
//person = {name: 'mark', age: 32}//Property 'gender' is missing in type '{ name: string; age: number; }' but required in type '{ name: string; age: number; gender: string; }'.

//console.log(person2.gender)
console.log(person1.name)//roperty 'name' does not exist on type 'object'.
console.log(person["age"])// suare bracket notation for accesing the object key value

let person12: {
    name: string,
    age: number,
    address: {
        city: string,
        country: string
    }
} = {
    name: 'John',
    age: 30,
    address: {
        city: 'london',
        country: 'India'
    }
} */
/* #07 Arrays in TypeScript */
var person = ['john', 28, 'male', 1000, true]; // type is number and string
//person.push(true)//Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
person.push(28);
var names = ['john', 'mark', 'steve'];
var brithyear = [1998, 1989, 2007]; // type as inferred, explictiliy assign'
names.push('pampa');
var city = [];
city.push(583114, 'pampa');
console.log(city);
console.log(city[0]);
for (var _i = 0, brithyear_1 = brithyear; _i < brithyear_1.length; _i++) {
    var year = brithyear_1[_i];
    console.log(year);
}
//using the generic type
var numbers = [1, 2, 3, 4, 5];
var names1 = ["Alice", "bob", "charlie"];
console.log(numbers[0]);
console.log(numbers[2]);
// Tuples
var person12 = ['Alice', 25];
console.log(person12[0], person12[1]);
// multidimensional array
var matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(matrix[1][2]);
// union types in array
var mixed = [];
mixed.push(1, 2, 'pampa', true);
console.log(mixed[0]);
