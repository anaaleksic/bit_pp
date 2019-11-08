/*1
Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]*/

var input = [2, 4, 7, 11, -2, 1];
var newArray = [];

for (var i = 0; i < input.length; i++) {
  newArray.push(input[i]);
  newArray.push(input[i]);
}

console.log(newArray);

/*2
Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */

var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var newArray = [];
var sorted = input.sort(function(a, b) {
  return a - b;
});

for (var i = 0; i < sorted.length; i++) {
  if (sorted[i] === sorted[i + 1] || sorted[i + 1] === sorted[i + 2]) {
    sorted.splice([i + 1], 1);
  }
}

console.log(sorted);

/*

Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/
