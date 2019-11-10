// 1-Write a program that calculates the maximum of two given numbers. 
function max(a, b) {
    if (a > b)
        return a;
    else
        return b;
}
console.log(max(6, 81));

//2.  Write a program that checks if a given number is odd.

function odd(a) {
    if (a % 2 !== 0) {
        return "The number is odd";
    }
    else {
        return "the number is even";
    }
}
console.log(odd(7));

//3.  Write a program that checks if a given number is a three digit long number.
function three_digit(a) {
    if (a > 99 && a < 1000)
        return 'Number is three digit';
    else
        return 'Is not three digit';
}
console.log(three_digit(182));


//4.Write a program that calculates an arithmetic mean of four numbers.


function mean(a, b, c, d) {
    return (a + b + c + d) / 4;
}
console.log(mean(5, 15, 9, 10));


//5. Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

function square(a) {
    var row = '';

    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i === 0 || j === 0 || i === a - 1 || j === a - 1) {
                row += '* ';
            } else {
                row += "  ";
            }
        }

        row += '\n';
    }

    return row;
}

console.log(square(5));



//6.

function star(a, b, c) {
    var str = "";
    var row = "";
    for (var i = 0; i < a; i++) {

        str += "* ";
    }
    row = str + "\n";
    str = '';
    for (var i = 0; i < b; i++) {
        str += "* ";

    }
    var row1 = row + str + '\n';
    str = '';
    for (var i = 0; i < c; i++) {
        str += "* ";

    }
    var row3 = row1 + str;

    return row3;
}
console.log(star(5, 3, 7));



//7. Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
//* * * * *
//* * *
//* * * * * * *
function numOfDigits(x) {
    var br = 0;
    while (x / 10 > 0) {
        br++;
        x = x / 10;
    }
    return br;
}

console.log(numOfDigits(12));



//7.  Write a program that calculates a number of digits of a given number. 
function numOfDigits(x) {
    var br = '';
    br += x;
    return br.length;

}

console.log(numOfDigits(16552));




//8. Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3
function appearances(array, num) {
    var br = 0;
    for (var i = 0; i < array.length; i++)
        if (num === array[i])
            br++;
    return br;

}

console.log(appearances([2, 4, 7, 8, 7, 7, 1], 7));

//9. Write a program that calculates the sum of odd elements of a given array. 
function oddNum(array) {
    var br = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            br++;

        }
    } return br;
}
console.log(oddNum([2, 4, 7, 8, 7, 7, 1]));

//10. Write a program that calculates the number of appearances of a letter a in a given string. 
// Modify the program so it calculates the number of both letters a and A.

function letter(str) {
    var a = '';
    a += str;
    var br = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === "A" || a[i] === "a") {
            br++;
        }
    } return br;
}
console.log(letter('Abcaabcaabca'));





//11. Write a program that concatenates a given string given number of times. 
//For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 
function str(a, num) {
    var b = "";

    for (var i = 0; i < num; i++) {
        b += a;

    } return b;
}
console.log(str("Abc", 4));

