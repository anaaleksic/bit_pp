
////// 1.Write a function to check whether the `input` is a string or not.


function str(word) {
    if (typeof word === "string") {
        return true
    }
    else if (typeof word !== "string") {
        return false
    }

}
console.log(str(50));



//////////////2. Write a function to check whether a string is blank or not.

function aba(str) {
    if (typeof str === "string" && str.length === 0) {
        return "true";
    }
    else {
        return "false";
    }

}

console.log(aba(""));


//////////////3. Write a function that concatenates a given string n times (default is 1).

function ha(string, num) {
    var br = "";
    for (var i = 0; i < num; i++) {
        br += string
    }

    return br;

}

console.log(ha("ha", 3));


//////4. Write a function to count the number of letter occurrences in a string.

function appearances(rec, num) {
    var br = 0;
    for (var i = 0; i < rec.length; i++) {
        if (num === rec[i]) {
            br++;
        }
    }

    return br;
}
console.log(appearances("My random string", "n"));


//////5. Write a function to find the position of the first occurrence of a character in a string.
//The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

function niz(array, letter) {
    var br = "";
    for (var i = 0; i < array.length; i++) {
        if (letter === array[i]) {
            return i + 1;

        }

    } return -1;
}
console.log(niz("Apsolutno", "s"));



/*6.Write a function to find the position of the last occurrence of a character in a string.
 The result should be in human numeration form. If there are no occurrences of the character, function should return -1.*/

function niz(rec, letter) {
    var br = -1;
    for (var i = 0; i < rec.length; i++) {
        if (rec[i] === letter) {
            br = i;
        }
    }

    return br;
}

console.log(niz("Apsolutno", "o"));




function niz(rec, letter) {
    var br = -1;
    for (var i = rec.length; i >= 0; i--) {
        if (rec[i] === letter) {
            br = i;
        }
    }
    return br;
}
console.log(niz("Apsolutno", "A"));



//7.Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

function str(rec) {
    var a = [];
    for (var i = 0; i < rec.length; i++) {
        if (rec[i] !== " ") {
            a[i] = rec[i];
        }
        else {
            a[i] = null;
        }
    } return a;
}
console.log(str("Random"));


/*8. Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

function prime(broj) {

    if (broj === 1) {
        return true;
    }
    if (broj === 2) {
        return false;
    }
    for (var i = 2; i < broj; i++) {
        if (broj % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(prime(2));
console.log(prime(1));
console.log(prime(120));
console.log(prime(57));


//drugi nacin
function numberPrime(a) {
    var res;
    for (var i = 2; i <= a - 1; i++) {
        if (a % i === 0) {
            return false;
        }
        return true;
    }
}
console.log(numberPrime(7));



/*9.  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator. */

function git(str, separator) {
    var b = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            b += str[i];
        }
        else {
            b += separator;
        }
    }
    return b;
}

console.log(git("My random string", "_"));
console.log(git("My random string", "+"));
console.log(git("My random string", "-"));


//10. Write a function to get the first n characters and add “...” at the end of newly created string.

function bla(char, broj) {
    var res = "";
    for (i = 0; i < broj; i++) {
        res += char[i];

    }
    return res + "...";
}
console.log(bla("My random string", 8));

//11.  Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
//["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function convertStringsToNumbers(arrayOfStrings) {

    var result = [];
    var j = 0;

    for (var i = 0; i < arrayOfStrings.length; i++) {

        if (isFinite(arrayOfStrings[i])) {

            result[j] = parseFloat(arrayOfStrings[i]);
            j++;
        }
    }

    return result;

}

console.log(convertStringsToNumbers(["1", "21", undefined, "42", "1e+3", Infinity, 0]));


//12 Write a function to calculate how many years there are left until retirement based on the year of birth.
// Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed. 

function retirement(yearOfBirth, sex) {
    if (sex = "male") {
        if (2019 - yearOfBirth > 65) {
            return "The person is already retired.";
        }
        return 65 - (2019 - yearOfBirth);
    }
    else if (sex = "female") {
        if (2019 - yearOfBirth > 60) {
            return "The person is already retired.";
        }
        return 60 - (2019 - yearOfBirth);
    }
}
console.log(retirement(1985, "female"));

/*13 Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
Hint: num % 100 >= 11 && num % 100 <= 13
*/

function humanizeNumber(number) {
    if (number % 100 >= 11 && number % 100 <= 13)
        return number + "th";

    switch (number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }

    return number + "th";
}

console.log(humanizeNumber(1));
console.log(humanizeNumber(25));
console.log(humanizeNumber(334));





















































function appearances(array, num) {
    var br = 0;
    for (var i = 0; i < array.length; i++) {
        if (num === array[i]) {
            br++;
        }

    }

    return br;

}

console.log(appearances([2, 4, 7, 8, 7, 7, 1], 7));
console.log(appearances([2, 4, 7, 8, 8, 9, 8, 8, 9, 2, 5], 8));





