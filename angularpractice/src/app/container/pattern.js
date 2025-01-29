const { reduce, map } = require("rxjs");

// PS D:\Practice\Angular17-Practice\angularpractice\src\app\container> node ./pattern.js
function row1()
{for (let i = 1; i <= 3; i++) {
    let row = ''; 
    for (let j = 1; j <= 3; j++) {
        row += '*';
    }
    console.log(row); 
}}

// The outer loop controls the number of rows (3 rows in this case).
// The inner loop controls the number of stars (*) in each row (3 stars per row).
// Each row is printed after it is constructed, resulting in a 3x3 grid of stars.


/*

Yes, in this case:

- **The outer loop (`for (let i = 1; i <= 3; i++)`) represents the rows**. Each iteration of the outer loop builds one complete row of the grid.

- **The inner loop (`for (let j = 1; j <= 3; j++)`) represents the columns**. Each iteration of the inner loop adds one `*` to the current row.

---

### Visual Representation of Execution:

- **Outer Loop (Row Control)**:
  - The outer loop ensures there are 3 rows.
  - For each row (`i`), a new string (`row`) is built.

- **Inner Loop (Column Control)**:
  - The inner loop runs **within each row** and appends `*` to the `row` string, creating 3 columns per row.

---

### How It Maps:
- Outer loop (`i`) → Rows (controls the number of rows).
- Inner loop (`j`) → Columns (controls how many `*` are in each row).

### Example Walkthrough:
- When `i = 1` (1st row):
  - Inner loop appends 3 stars: `***` → First row is built.

- When `i = 2` (2nd row):
  - Inner loop appends 3 stars: `***` → Second row is built.

- When `i = 3` (3rd row):
  - Inner loop appends 3 stars: `***` → Third row is built.

This pattern creates a **3x3 grid**, with rows and columns both controlled by the loops.
*/

// ***
// ***
// ***


// *****
// *****
// *****
// *****
// *****
function row2()
{for(var i=1; i<=5; i++){
    let row = '';
    for(var j=1; j<=5; j++){
        row += '*'
    }
    console.log(row); 
}}
// ============================
// part 2

// 11111
// 22222
// 33333
// 44444
// 55555




function row3()
{for(var i=1; i<=5; i++){
    let row = '';
    for(var j=1; j<=5; j++){
        row += i // printing the current outer loop index
    }
    console.log(row)
}}



// part 3

// 12345
// 12345
// 12345
// 12345
// 12345

function row4()

{for(var i=1; i<=5; i++){
    let row = ''
    for(var j=1; j<=5; j++){
        row += j;// here columns value are changeing to print the each of the j increment
    }
    console.log(row)
}}

// part 4

// 55555
// 44444
// 33333
// 22222
// 11111

function row5()

{for(var i=5; i>=1; i--){
    let row = ''
    // for(var j=1; j<=5; j++){
        for(var j=5; j>=1; j--){
        row += i;// here printing the i bec
    }
    console.log(row)
}}



// part 5

// 54321
// 54321
// 54321
// 54321
// 54321


// herre column wise value chagne happenin so need to print the j value and i should beging from the i=5
// here print inner loop index value
function row6()
{for(var i=5; i>=1; i--){
    let row = ''
    for(var j=5; j>=1; j--){
        row += j;
    }
    console.log(row)
}
}



// part - 7

// AAAAA
// BBBBB
// CCCCC
// DDDDD
// EEEEE

function prinPattern(){

   let  i,j;

   for(i='A'.charCodeAt(0); i<='E'.charCodeAt(0); i++){
    let row = '';

    for(j='A'.charCodeAt(0); j<='E'.charCodeAt(0); j++){
        row += String.fromCharCode(i);// covert ascii code to back to the character
    }
    console.log(row)
   }

   console.log('part 7 end\n')


}
// prinPattern();

// part 8


function prinPattern1(){


// ABCDE
// ABCDE
// ABCDE
// ABCDE
// ABCDE

    let  i,j;
 
    for(i='A'.charCodeAt(0); i<='E'.charCodeAt(0); i++){
     let row = '';
 
     for(j='A'.charCodeAt(0); j<='E'.charCodeAt(0); j++){
         row += String.fromCharCode(j);// covert ascii code to back to the character
     }
     console.log(row)
    }
 
    console.log('part 8 end\n')
 
 
 }
//  prinPattern1();

// pattern 9

function pattern2(){

// EEEEE
// DDDDD
// CCCCC
// BBBBB
// AAAAA

    let i,j;

    for(i='E'.charCodeAt(0); i>='A'.charCodeAt(0); i--){
        let row = ""

        // for(j='E'.charCodeAt(0); j>='A'.charCodeAt(0); j--)
        for(j='A'.charCodeAt(0); j<='E'.charCodeAt(0); j++)
        {
            row += String.fromCharCode(i);
        }
        console.log(row)
    }
}
// pattern2()


// part 10

function pattern3(){
// EDCBA
// EDCBA
// EDCBA
// EDCBA
// EDCBA
    let i,j;

    for(i='A'.charCodeAt(0); i<='E'.charCodeAt(0); i++){
        let row = ""

        for(j='E'.charCodeAt(0); j>='A'.charCodeAt(0); j--){
            row += String.fromCharCode(j)
        }
        console.log(row)
    }
}

// pattern3()

// Part 11 - Right-angled triangle asterisk pattern

function pattern4() {
    // *
    // **
    // ***
    // ****
    // *****

    let i, j;
    for (i = 1; i <= 5; i++) {
        let row = ''

        for (j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row)
    }
}
// pattern4();

class Employee {
    name;
    age;

    constructor(name, age){

        this.age = age;
        this.name = name

        console.log('pampa')

    }

    displayInfo() {

        console.log('employee',+ this.age, this.name)

    }

}

// var emp = new Employee('pampa',26);// defaulty calling the constructor, if not call explicity also, using new keyword for creating object and Emploee() calling
// emp.displayInfo();

// Object


var person = {
    name: 'John',
    age: 30,
    isEmployed: true,
    address : {
        city: "new york",
        country: 'usa'
    },
    hobbies: Number[1,2,2,4],
    greet: function(val){
        return `hi hello',${val}`
    },
    isNull:null,
    stock:undefined,
}


// console.log(person.address, person.greet('pampathi'),person.isEmployed, person.isNull, person.stock)


// var

var pampaNumber = 10;
pampaNumber = 31
function Example(){
    pampaNumber = 31;

    if(true){
        var pampaNumber = 21;
        console.log(pampaNumber)
    }
    console.log('reddy',pampaNumber)// function scoped
}
pampaNumber = 51
// console.log(pampaNumber);
// Example()


//let

let pampaInit = 23;

function Example1(){
    pampaInit = 35;

    if(true){
         pampaInit = 76;
        let reedy = 78
        console.log('pampa', pampaInit, reedy)
    }
    console.log('cons1', pampaInit, )
    console.log('cons', reedy, )// undefined
}

// Example1()
// console.log('pampaInit',pampaInit);
// Q. What is the use of typeof operator?

function typeof1(){

    let num = 42;
     num = 43;
     let bool = true;
     let object = {key: 'pampe'};
     let arr = [1,2,4];
     let func  = function(){};
     let str = 'pampa';

    //  console.log(num)

    console.log(typeof num)
    console.log(typeof bool)
    console.log(typeof object)
    console.log(typeof arr)
    console.log(typeof func)
    console.log(typeof str)

}

// typeof1();

//Q. What is type coercion in JS?

/* Type coercion is the automatic
conversion of values from one data
type to another during certain
operations or comparisons.
❖ Uses of type coercion:
1. Type coercion can be used during
String and Number concatenation.
2. Type coercion can be used while
using Comparison operators.*/


function coercion(){
    let string = '42';
    let number = 42;
    let boolean = true;
    let nullValue = null;

    console.log(string + number);
    console.log(number + string);
    console.log(number + boolean);
    console.log(number ==  string);
    console.log(boolean == 1);
    console.log(boolean + nullValue)
    console.log(number ===  string);

    let result = true ? 'yes':'no';
    let result1 = false  ? 'yes': 'no'

    console.log(result1, result)
}

// coercion();

// What are the types of conditions statements in JS?
// if/else
// ternary operator
// switch stmmt




function  conditions(){


    let x = 20;

    if(x >10){
        console.log('1');
    }else if(x <5){
        console.log('2')
    }else {
        console.log('3');
    }


    let y = 20;
    let z = y > 10 ? "1": '0'
    console.log(z)



    let a = 5;

    switch(a){
        case 1:
            console.log('1');
            break;
            case 2: 
            console.log('2');
            break;
            case 5: console.log('5'); break;
            default: console.log('3');
    }


}
// conditions();

//Q. What is the difference between Spread and Rest operator in JS

// copying array
// mergin array
// passing multiple argument to function
// exapn the or print the array values into individual elements

function Spread(){


    var array = [1,2,3]
    console.log(...array);


    var originalArray = [1,2,3,4];
    var copying = [...originalArray,...array];
    console.log(copying)

  
    var array1 = [1,2,3];
    var array2 = [4,5];
    var array2 = [...array, ...array2]
        console.log(array2)
    


        var number = [1,2,2,4,5];
       
        function sum(a,b,c, ...number){ // rest operator

            console.log( 'pa', a+b+c)
            console.log(number)

        }
        sum(...number)
 
}

// Spread();

//Q. What are Arrays in JS? How to get, add & remove elements from array

/* get,add, remove, modify,others */

function arrayMethods(){


    let arr = [10,20,30,40];

    console.log(arr.indexOf(20))
    console.log(arr.indexOf(1))

    let result = arr.find(num  => num > 20)// it return specif value, if another value also first mactch

    console.log(result);

    let filter = arr.filter(num => num % 2 === 0)
    console.log(filter)//[ 10, 20, 30, 40 ]


    console.log(arr.slice(1,3))// without changin the original arrya, start and tart index
    console.log(arr)




}

// arrayMethods()



function mapAndForEach(){

    var arrar1 = [1,2,3];

    var afterMap = arrar1.map(e => e / 2)
    console.log(afterMap);
    var map1 = [];


    arrar1.forEach((e) => {
        map1.push(e * 2)
    })
    console.log(map1)
    


}
// mapAndForEach()



function sum(){
    console.log(arguments)//[Arguments] { '0': 1, '1': 2, '2': 3 }
    console.log(arguments.length)
    console.log(arguments[0])
}
// sum(1,2,3)



function convertObjrctIntoArray(){


    console.log(arguments)

    var array1 = Array.from(arguments);

    console.log(array1)

    var array2 = [...arguments]
    console.log(array2)



}


// convertObjrctIntoArray(1,2,2,3,3)

// Q. What are Callback Functions? What is it use?
function normal(){

function add(x,y){
    return x + y;
}

let a =3, b = 4;
let result = add(a,b)

console.log(result)

}

// normal()


function  callBack(){
    function add(a,b){
        return a +b;
    }
    function subtraction(a,b){
        return a -b;
    }

    function display(a, b, operations){
        var result = operations(a,b);
        console.log(result)
    }

    display(10, 5, add);
    display(10, 5, subtraction)

}

// callBack()

//Q. How to execute a piece of code repeatedly after some fix time?

// setInterval(() =>{
//     console.log('executinf')
// }, 1000)




// pampaInit(() =>{
//     console.log('reddy')
// },500)

function pampaInit1(callback, delay) {
    return (callback, delay); // Executes the callback after the delay
}

pampaInit1(() => {console.log('reddy');}  // paasing function as call back
 ,500);













