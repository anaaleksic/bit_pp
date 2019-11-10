// task 1 -Write a program that checks if a given element e is in the array a. 

var e = 3;
var a = [5, -4.2, 3, 7];



if (e === a[0] || e === a[1] || e === a[2] || e === a[3]) {
    console.log("yes");
}
else {
    console.log(" no");
}

/*2.nacin ovog gore iznad

var e = 3;
var a = [5, -4.2, 3, 7];
var answer=false;

for (var i = 0; i < a.length; i++) {
 if (e === a[i]) {
   answer=true;
    }
}
if (answer){
    console.log("yes");
}else{
    console.log("no");
}


*/

var e = 3;
var c = [5, -4.2, 18, 7];

for (var i = 0; i < c.length; i++) {
}
if (e === c[i]) {
    console.log("yes");
}
else {
    console.log("no");
}



/// task 2 -Write a program that multiplies every positive element of a given array by 2.

var a = [-3, 11, 5, 3.4, -8];
var outputArray = [];

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        outputArray[i] = a[i] * 2;
    }
    else {
        outputArray[i] = a[i];
    }
}
console.log(outputArray);




// 3 -Write a program that finds the minimum of a given array and prints out its value and index
var minimumValue = 0;
var minimumIndex = 0;
var minimumFound = false;
var inputArray = [4, 2, -7, -1, -3];
var i = 0;
var j = 1;

while (minimumFound === false) {

    while (inputArray[i] <= inputArray[j] && j < inputArray.length - 1) {
        j++;
    }

    if (inputArray[i] <= inputArray[j]) {

        minimumValue = inputArray[i];
        minimumIndex = i;
        minimumFound = true;
    }

    else {
        j = 0;
        i++;
    }
}
console.log([minimumValue, minimumIndex]);

/*drugi nacin i ovo je bez indexa
var b = [4, 2, 2, -1, 6];
var najmanji = 0;

for (i = 0; i < b.length; i++) {
    if (najmanji > b[i]) {
        najmanji = b[i];

    }


}
console.log(najmanji);
*/


//task 4 -Write a program that finds the first element larger than minimum and prints out its value

var a = [4, 2, 2, -1, -1];
var min = a[0];
var min2 = a[0];

for (var i = 0; i< a.length; i++) {
    if(a[i] < min) {
        min2 = min;
        min = a[i];
    }
}

console.log(min2);



// task 5 -Write a program that calculates the sum of positive elements in the array.

var a = [3, 11, -5, -3, 2];
sum = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum = sum + a[i];
    }

}
console.log("sum of positive elements is " + sum);


//task 6 Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   

var inputArray = [2, 4, -2, 7, -2, 4, 2];
var outputMessage = "The array isn't symmetric.";
var i = 0;

while (inputArray[i] === inputArray[inputArray.length - 1 - i] && i < 0.5 * inputArray.length) {
        i++;
}

if (i >= 0.5 * inputArray.length) {
    outputMessage = "The array is symmetric."
}
console.log(outputMessage);


/*7 Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

var inputArrayOne = [4, 5, 6, 2];
var inputArrayTwo = [3, 8, 11, 9];
var outputArray = [];

for (var i = 0; i < inputArrayOne.length; i++) {

    outputArray[2*i] = inputArrayOne[i];
    outputArray[2*i+1] = inputArrayTwo[i];
  
}
console.log(outputArray);



// task 8-Write a program that concatenates two arrays. 

var inputArrayOne = [4, 5, 6, 2];
var inputArrayTwo = [3, 8, 11, 9];
var outputArray = [];

for (var i = 0; i < inputArrayOne.length; i++) {

    outputArray[2*i] = inputArrayOne[i];
    outputArray[2*i+1] = inputArrayTwo[i];
  
}
console.log(outputArray);


//task 9 Write a program that deletes a given element e from the array a. 

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var b = []
for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
    }
    else {
        delete a[i];

    }
}
console.log(a);



//drugi nacin
var inputArrayOne = [4, 5, 6, 2];
var inputArrayTwo = [3, 8, 11, 9];
var outputArray = [];

for (var i = 0; i < inputArrayOne.length; i++) {

    outputArray[i] = inputArrayOne[i];
    outputArray[i+inputArrayOne.length] = inputArrayTwo[i];
  
}
console.log(outputArray);



//10 Write a program that deletes a given element e from the array a. 

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var b = []
for (i = 0, j = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[j] = a[i];
        j++;
    }

}
console.log(b);


/*11.Write a program that inserts a given element e on the given position p in the array a. 
if the value of the position is greater than the array length, print the error message. 
*/
var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
var b = [];

for (i = 0; i < a.length; i++) {
    if (i === p) {
        b[b.length] = e;
    }

    b[b.length] = a[i];
}
console.log(b);


//drugi nacin
var inputArray = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
var outputArray = [];


if (p > inputArray.length || p < 0) {
    outputArray = "Error";
}

else {
    
for (var i = 0; i <= inputArray.length ; i++) {

        if (i < p) {
            
            outputArray[i] = inputArray[i];
        }

        else if (i === p) {

            outputArray[i] = e;
        }

        else {

            outputArray[i] = inputArray[i-1];
        }

}

}
console.log(outputArray);



















