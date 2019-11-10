/* 1. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.*/

var input= 103;

if ((typeof input)=='number') {
    if (input % 2 === 0) {
        var divisionResult = input / 2;
        console.log(input + " / 2 = "+ divisionResult);
    }else {
        console.log("x"); 
    }
}


/* 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
Sample numbers: -5, -2, -6, 0, -1 */


var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e) {
    console.log(a);
} else if (b > a && b > c && b > d && b > e) {
    console.log(b);
} else if (c > a && c > b && c > d && c > e) {
    console.log(c);
}else if (d > a && d > b && d > c && d > e) {
    console.log(d);
} else {
    console.log(e);
}


/* 3. Write a conditional statement to sort three numbers.
Sample numbers : 0, -1, 4 */

var a = 0;
var b = -1;
var c = 4; 

if (a > b && a > c && b > c) {
    console.log(a,b,c);
}else if (a > b && a > c && c > b) {
    console.log(a,c,b);
}else if (b > a && b > c && a > c) {
    console.log(b,a,c);
}else if (b > a && b > c && c > a) {
    console.log(b,c,a);
}else if (c > a && c > b && a > b) {
    console.log(c,a,b);
}else if (c > a && c > b && b > a) {
    console.log(c,b,a);
}


/* 4. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 */

var x = 3;
var y = -7;
var z = 2;

if (x > 0 && y > 0 && z > 0) {
    console.log("The sign is +");
} else if (x < 0 && y < 0 && z > 0) {
    console.log("The sign is +");
} else if (x > 0 && y < 0 && z < 0) {
    console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
    console.log("The sign is +");
} else {
    console.log("The sign is -");
}


/* 5. Write a program that compares two numbers and displays the larger. Display the result in the console */

var num1 = 14;
var num2 = 13;

   if (num1 > num2) {
       console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
   } else if (num2 > num1) {
       console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
   } else {
       console.log("The values " + num1 + " and " + num2 + " are equal.");
   }
