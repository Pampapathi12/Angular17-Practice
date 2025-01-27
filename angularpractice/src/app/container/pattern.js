// PS D:\Practice\Angular17-Practice\angularpractice\src\app\container> node ./pattern.js

for (let i = 1; i <= 3; i++) {
    let row = ''; 
    for (let j = 1; j <= 3; j++) {
        row += '*';
    }
    console.log(row); 
}

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

for(var i=1; i<=5; i++){
    let row = '';
    for(var j=1; j<=5; j++){
        row += '*'
    }
    console.log(row); 
}
// ============================
// part 2

// 11111
// 22222
// 33333
// 44444
// 55555


console.log('pampa')


for(var i=1; i<=5; i++){
    let row = '';
    for(var j=1; j<=5; j++){
        row += i // printing the current outer loop index
    }
    console.log(row)
}

console.log('part2 end')

// part 3

// 12345
// 12345
// 12345
// 12345
// 12345

for(var i=1; i<=5; i++){
    let row = ''
    for(var j=1; j<=5; j++){
        row += j;// here columns value are changeing to print the each of the j increment
    }
    console.log(row)
}
console.log('part3 end')
// part 4

// 55555
// 44444
// 33333
// 22222
// 11111

for(var i=5; i>=1; i--){
    let row = ''
    // for(var j=1; j<=5; j++){
        for(var j=5; j>=1; j--){
        row += i;// here printing the i bec
    }
    console.log(row)
}

console.log('part 4 end');

// part 5

// 54321
// 54321
// 54321
// 54321
// 54321


// herre column wise value chagne happenin so need to print the j value and i should beging from the i=5
// here print inner loop index value

for(var i=5; i>=1; i--){
    let row = ''
    for(var j=5; j>=1; j--){
        row += j;
    }
    console.log(row)
}




