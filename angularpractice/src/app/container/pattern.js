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
pattern4();







