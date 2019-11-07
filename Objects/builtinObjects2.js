/* 1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
 */


var arr = [2, 4, 7, 11, -2, 1];
var niz = [];

for (var i = 0; i < arr.length; i++) {
    niz.push(arr[i]);
    niz.push(arr[i]);
}
console.log(niz);


/*Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
*/

//var arr1 = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

//var duplicateArr = arr1.splice(arr1[i], 1);
//console.log(duplicateArr);



var arr1 = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var duplicateArr = [];


for (var i = 0; i < arr1.length; i++) {

    if (arr1[i] === arr1[i + 1]) {
        duplicateArr.push(arr1[i]);
        duplicateArr.splice(arr1[i + 1], 1);


    }
}
console.log(duplicateArr);






