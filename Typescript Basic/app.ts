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

/* let person = ['john',28,'male',1000,true]// type is number and string

//person.push(true)//Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
person.push(28)




let names: string[] = ['john','mark','steve' ]
let brithyear: number[] = [1998,1989,2007];// type as inferred, explictiliy assign'
names.push('pampa')

let city: (string | number)[] = []

city.push(583114,'pampa')
console.log(city)
console.log(city[0])

for(let year of brithyear){
    console.log(year)
}


//using the generic type
let numbers: Array<number> = [1,2,3,4,5];
let names1: Array<string> = ["Alice","bob","charlie"]
console.log(numbers[0])
console.log(numbers[2])

// Tuples

let person12 : [string,number] = ['Alice',25]
console.log(person12[0],person12[1])

// multidimensional array

let matrix:  number[][] = [
    [1,2,3],
    [4,5,6]

]

console.log(matrix[1][2])

// union types in array
let mixed: (number | string | boolean)[] = []

mixed.push(1,2,'pampa',true);

console.log(mixed[0])
// array with any types

let randomvalue: any[] = [1,2,3 ,'hello', true,{key:'value'}]

//objexts array

interface Student {
    name: string,
    age: number;
}

let students : Student[] = [

    {name: 'pampa', age:22},
    {name: 'reddy', age:312}

]

console.log(students[0].name)// array of object value accesings */

/* 08 Tuples in TypeScript */

/* let employee:  [number,string,number,boolean] = [123,'pampa',1234,true]
// Type '[number, string, number, true, number]' is not assignable to type '[number, string, number, boolean]'.
//   Source has 5 element(s) but target allows only 4.
//tuples is fixed length, make each element as type of the data
console.log(employee)// tuples converted in array of javascript

employee.push(100)// not showing the error , push time show not error
console.log(employee)
// tuple with optional parameter
let employee12: [string,number,boolean?] = ["john", 30]
console.log(employee12)
employee12[2] = true;
console.log(employee) */


/* 09 Enums in TypeScript */

/* enum Roles {
    ADMIN,
    READ_ONLY,
    WRITE_ONLY,
    READ_WRITE,// NAMED VALUE, INCREMENT
}

const  user = {
    name: 'john',
    age: 30,
    gender: 'male',
    role: Roles.ADMIN

}

if(user.role ===  Roles.ADMIN){
    console.log('this user is an admin')
}

enum Direction {
    Up,
    Down,
    Left,
    RIght
}
// By default, TypeScript assigns numeric values starting from 0.
// Up = 0, Down = 1, Left = 2, Right = 3.

console.log(Direction.Up, Direction.Down)

enum Status {
    Pending = 1,
    InProgress = 5,
    Completed = 10,
}s

console.log(Status.Pending) */


/* let dynamicData: any;
dynamicData = 100;
dynamicData = 'pampa';
dynamicData = ['hello', 123]
dynamicData = {name:'reddy', istrue:true}
console.log(dynamicData);

let arr: any[];
arr = ['heelo', 123,true,null,undefined];
let test;
console.log(typeof test)

let data : any;
data = 10;
console.log(data)

data = "hello"
console.log(data);

data = true;
console.log(data)

function fetchData(): any{
    return {id:1,name:"alice", active:true}
}
let  user = fetchData()

console.log(user.name)


let value: any;

value = "Hello";

console.log(value.toUpperCase());
console.log(value.toFixed(2));//app.js:246 Uncaught TypeError: value.toFixed is not a function */


/* #11 Union Type in TypeScript */

/* let user: {user:string, age: number} | null = null;

function getUser(){
    const uname = 'pampapathi';
    const age = 30;
    user = {user:uname,age:age}
    return user
}
getUser();


function printMessage(message:string, code:string | number){

    if(typeof code === 'string'){
    console.log(`${message}. status code: ${code.trim()}`)
    }
    else{
        console.log(`${message}. status code: ${code}`)
    }
    // Property 'trim' does not exist on type 'string | number'.Property 'trim' does not exist on type 'number
}
printMessage('request was successfull', 200);
printMessage('resource was not found', ' 404'); */

/* 12 Literal Type in TypeScript */

/* const str = "hello, world"// literal
let str1 = "hellow wordl"// string

function roleMessage(role:'Admin' | 'read' | 'write'){
    switch(role){
        case 'Admin':
            console.log(' you have admin permission');
            break;
        case 'read':
            console.log('you have read permission');
                break;
        case 'write':
            console.log('you have read and write permission')
            break;

        default:
            console.log('unknow permission')

    }
}

//roleMessage('pampa')//Argument of type '"pampa"' is not assignable to parameter of type '"Admin" | "read" | "write"'
roleMessage('Admin');// matched the value literla value from argument and defned type


let variable: 'value1' | 'value2' | 'value3';


let direction: 'up' | 'down' | 'left' | 'right';

direction = "up";
direction = "down"; */
//direction = "forward"; //Type '"forward"' is not assignable to type '"up" | "down" | "left" | "right"'.

/* 13 Understanding Type Alias */

type stringType = string;
let str : stringType = 'Hello'

type StringOrNumber = string | number;

function printMessage(message:string, code:StringOrNumber){
    if(typeof code === 'string'){
        console.log(`${message}. status code ${code.trim()}`)
    } else{
        console.log(`${message}. status code ${code}`)
    }
}
printMessage('succes', 200)
printMessage('resource not founf', '400')

// type roleType = string | number | boolean;

type roleType = 'Admin' | 1 | true;



function roleMessage(role:roleType){
    switch(role){
        case 'Admin':
            console.log(' you have admin permission');
            break;
        case 1:
            console.log('you have read permission');
                break;
        case true:
            console.log('you have read and write permission')
            break;

        default:
            console.log('unknow permission')

    }
}
function roleMessage1(role: 'Admin' | 'read' | 'write'){
    switch(role){
        case 'Admin':
            console.log(' you have admin permission');
            break;
        case 'read':
            console.log('you have read permission');
                break;
        case 'write':
            console.log('you have read and write permission')
            break;

        default:
            console.log('unknow permission')

    }
}

roleMessage('Admin')
roleMessage(1)
//roleMessage(undefined)//Argument of type 'undefined' is not assignable to parameter of type 'roleType'

type user = {fname:string; lname:string,age:number}

function getFullname(user: user){

    return user.fname + ''+user.lname;

}

function isElizible(user:user){
    return user.age >= 18
}
let user : user = {fname:'pampa', lname:'reddy', age: 30}
console.log(getFullname(user))
console.log(isElizible(user))

