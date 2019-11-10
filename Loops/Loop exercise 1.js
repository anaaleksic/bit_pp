/* task 1

Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
*/

var a = 0;
var num = "";



for (var a = 0; a < 15; a++) {
    if (a % 2 === 0) {
        console.log("number is even");
    }
    else {
        console.log("num is odd");
    }
}


/* task 2
Write a program to sum the multiples of 3 and 5 under 1000.
*/

var b = 0;
var re = 0;

for (var b = 0; b < 1000; b++) {
    if (b % 3 === 0) {
        if (b % 5 === 0) {
            re = re + b;
        }

    }
}
console.log(re);

/* 3.
Write a program to compute the sum and product of an array of integers.
*/

var n = [1, 2, 3, 4, 5, 6];
var sum = 0;
var pro = 1;


for (var i = 0; i < n.length; i++) {
    sum = sum + n[i];
    pro = pro * n[i];
}
console.log("sum: " + sum + " pro: " + pro);



console.log("\n");//novi red

var n = [1, 2, 3, 4, 5, 6];
var sum = 0;
var pro = 1;
var i = 0;

while (i < n.length) {

    sum = sum + n[i];
    pro = pro * n[i];
    i++

}
console.log("sum: " + sum + " pro: " + pro);





/*

var n = [1, 2, 3, 4, 5, 6];
var sum = 0;
var pro = 1;
var i = 0;

while (i < n.length) {

    sum = sum + n[i];
    pro = pro * n[i];
    i += 2

}
console.log("sum: " + sum + " pro: " + pro);

*/





/* 4.

Write a program which prints the elements of the following array as a single string.

*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];


for (var i=0; i<x.length; i++){
     console.log(x[i]);
}



/* 5.

Write a program that prints the elements of the following array.

*/

var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];


for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }

}


/* task 6
Write a program that outputs the sum of squares of the first 20 numbers. 

*/

var h = 0;
sumi = 0;

for (h = 0; h < 20; h++) {
    sumi = sumi + h * h
}
console.log(sumi);

/*

task 7
Write a program that computes average marks of the following students.Then use this average to determine the corresponding grade.

*/

var student = [["David", 80], ["Marko ", 77], ["Dany", 88], ["John", 95], ["Thomas", 68]];
var ave = 0;
var sum = 0;

for (var i = 0; i < student.length; i++) {
    sum = sum + student[i][1];
    ave = sum / student.length;
}
console.log("Prosecna ocena " + ave);

if (ave < 60) {
    console.log("Ocena je F");
}
else if (ave < 70) {
    console.log("Ocena je D");
}
else if (ave < 80) {
    console.log("Ocena je C");
}
else if (ave < 90) {
    console.log("Ocena je B");
}
else if (ave < 100) {
    console.log("Ocena je A");
}




/* task 8

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (var i = 0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}






















