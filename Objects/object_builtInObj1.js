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
var sorted = input.sort(function (a, b) {
  return a - b;
});

for (var i = 0; i < sorted.length; i++) {
  if (sorted[i] === sorted[i + 1] || sorted[i + 1] === sorted[i + 2]) {
    sorted.splice([i + 1], 1);
  }
}

console.log(sorted);

/*3

Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/

function checksNum(arr) {

  var median = "";
  var count = 0;

  if (arr.length % 2 === 0) {
    return console.log("Error: number of elements is even")

  } else {
    median = Math.floor(arr.length / 2 + 1);
    
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < median) {
      count++;
    }
  }
  return count;
}
console.log(checksNum([-1, 8.1, 3, 6, 2.3, 44, 2.11]));



/*4
 Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }
*/

function findMin(a) {
  var min = a[0];
  var pos = 0;
  for (var i = 0; i < a.length; i++) {
      if (a[i] <= min) {
          min = a[i];
          pos = i;
      }
  }
  return {
      minValue: min,
      minLastIndex: pos
  }
};

console.log(findMin([1, 4, -2, 11, 8, 1, -2, 3]))

/*5
 Write a function that finds all the elements in a given array less than a given element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]
Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.
  Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]
Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.
*/

function elementsLessThan(a, b) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
      if (a[i] < b) {
          result.push(a[i]);
      }
  }
  return result;
}
console.log(elementsLessThan([2, 3, 8, -2, 11, 4], 6));

function startWith(a, b) {
  result = [];
  for (var i = 0; i < a.length; i++) {
      if ((a[i].toUpperCase().indexOf(b.toUpperCase())) === 0) {
          result.push(a[i]);
      }
  }
  return result;
}

console.log(startWith(["JavaScript", "Programming", "fun", "product"], "pro"));

function exercise5(a, b, callback) {
  return callback(a, b);
}

console.log(exercise5(["Oki", "JAva", "petaK"], "Java", startWith));

/*6
Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
[
{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]
Write a function that calculates the total price of your shopping list.
Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.
Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.
*/

function calculateSumPrice(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
      sum += a[i].price;
  }
  return sum;
}

var result = calculateSumPrice([
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 }
]);
console.log(result);
