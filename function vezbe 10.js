
//Write IIFE that replaces the first and the last element of the given array and prints out its elements. 


function replace(arr) {
    var box = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = box;
    return arr;


}
var pu = replace([4, 5, 11, 9]);
console.log(pu);


///iifee-drugi primer-pravi

var replace = (function (arr) {
    var box = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = box;
    return arr;
})([4, 5, 11, 9]);
console.log(replace);


////2.Write IIFE that calculates the surface area of the given rectangle with sides a and b. 

var surface = (function retangle(side1, side2) {
    var p = side1 * side2;
    return p;
})(4, 5);
console.log(surface);


///3.Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 

var replace = (function str(word) {
    var counter = 0;
    var newString = "";

    for (var i = 0; i < word.length; i++) {
        if (word[i] === "m" || word[i] === "M") {
            newString += "*";
            counter++

        }
        else {
            newString += word[i];
        }
    } return [newString, counter];
})("prograMming");
console.log(replace);


///4.Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 

var emailAddress = (function (name, surname) {
    var email = "";
    email = name + "." + surname + "@gmail.com";
    return email;

})("ana", "aleksic");
console.log(emailAddress);

///5.Write a function that returns a function that calculates a decimal value of the given octal number. 

function calculate() {
    return function number(a) {
        return a;
    }
}
var konacno = calculate()(034)
console.log(konacno);

///6.Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long 
//and contains at least one digit. The function should receive two callbacks 
//named successCallback and errorCallback that should be called in case password is correct or invalid. 

function successCallback() {
    return "Password is valid";
}
function errorCallback() {
    return "Password is invalid";
}
function isPasswordValid(password) {
    if (password.length < 6){
        return errorCallback();
    }
    else{
        for(var i=0; i<password.length; i++){
            if(!Number.isNaN(parseInt(password[i]))){
                return successCallback();
            }
        
        }
        return errorCallback();
    }
}
console.log(isPasswordValid("anavolislatko1"));




//7.Write a function that filters elements of the given array so that they satisfy a condition given by the callback function
//[2, 8, 11, 4, 9, 3], callback function checks if the number is odd

function isOdd(n) {
    if (n % 2 === 0) {
        return false;
    }
    else {
        return true;
    }
}
function filterOut(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (isOdd(arr[i])) {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;

}
console.log(filterOut([2, 8, 11, 4, 9, 3]));
