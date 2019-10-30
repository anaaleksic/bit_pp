"use strict";



/*1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function getMinAndMax(numbers) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < numbers[i++]) {
            var min = numbers[i];
            var min = i;

        }

        for (j = 0; j < numbers.length; j++)
            if (numbers[j] > numbers[j++]) {
                var max = numbers[j];
                var max = j;
            }

    } var tmp = i;
    var max = tmp;
    var min = max;
    return numbers;

}

console.log(getMinAndMax([3, 500, 12, 149, 53, 414, 1, 19]));

/* 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function newArray(numbers) {
    var transformed = [];

    for (var i = 0; i < numbers.length; i++) {
        var calc = numbers[i] / 2 + 5;

        if (calc === 0) {
            calc = 20;
        }

        transformed[i] = calc;
    }

    return transformed;

}

console.log(newArray([3, 500, -10, 149, 53, 414, 1, 19]));


3. /*Initialize two arrays. The first one should contain student names, the second one the number of points for each student. 
Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/
function numbers(student, grade) {
    var c = [];
    var d = [];
    for (var i = 0; i < grade.length; i++) {
        if (grade[i] < 50) {
            d[i] = 'failed to complete the exam.'
        }

        else if (grade[i] < 60) {
            d[i] = 6;

        }
        else if (grade[i] < 70) {
            d[i] = 7;
        }
        else if (grade[i] < 80) {
            d[i] = 8;
        }
        else if (grade[i] < 90) {
            d[i] = 9;
        }
        else if (grade[i] < 100) {
            d[i] = 10;
        }
    }
    for (var i = 0; i < student.length; i++) {
        c[i] = grade[i] + 'had ' + student[i] + 'and that is' + d[i]
    } return c;


}

console.log(numbers(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));



/*6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.
The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
*/

function numbers() {
    var even = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 2 === 0) {
            even = even + i;
        }
    }

    var odd = 0;
    for (var j = 0; j < 500; j++) {
        if (j % 2 !== 0) {
            odd = j + odd;
        }
    }

    return (even - odd) * 12.5;
}

console.log(numbers());





function numbers() {
    var even = 0;
    var odd = 0;

    for (var i = 0; i < 1000; i++) {
        if (i % 2 === 0) {
            even = even + i;
        }

        if (i % 2 !== 0 && i < 500) {
            odd = i + odd;
        }
    }

    return (even - odd) * 12.5;
}

console.log(numbers());

/*7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]*/
"use strict"
function elements(str) {
    for (var i = 0; i < str.length; i++) {
        var element = str[i];

        if (typeof element === 'string' && element.length >= 2) {
            str[i] = element[0] + element[1];
        }
    }

    return str;
}

console.log(elements(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));

/* 8.
Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/
"use strict"
function word(str) {
    var res = "";
    for (var i = str.length - 1; i >= 0; i--) {

        res = res + str[i]
    }
    return res;
}
console.log(word('Belgrade Institute of Technology'));



/* 9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time.
Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/


function combination(numbers) {
    var comb = "";
    for (var i = 0; i <= numbers.length; i++) {
        for (var j = 0; j <= numbers.length; j++) {
            if (i !== j) {

            }
        }



    } return comb;
}


console.log(combination([1, 2, 3, 4, 5, 6, 7]));


/* 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false*/


function enterNumber(digit) {
    for (var i = 2; i < digit; i++) {
        if (digit % i === 0) {
            return false
        }
    }

    return true;

}

console.log(enterNumber(15));


/*11. Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/

"use strict"




/********trgtgttrrth*/ * /
























