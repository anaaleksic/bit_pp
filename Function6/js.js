//1
function countVowels(string) {
    var result = 0;
    for (var i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                result++;
        }
    }
    return result;
}
console.log(countVowels("AEaenalek"));

//2

function combineArrays(a, b) {

    var res = [];

    for (var i = 0; i < a.length; i++) {

        res[res.length] = a[i];
        res[res.length] = b[i];
    }
    return res;
}

console.log(combineArrays(["a", "b", "c"], [1, 2, 3]));

//3

function rotateByK(arr, k) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {


        newArr[newArr.length] = arr[(i + k) % arr.length];

    }
    return newArr;
}
console.log(rotateByK([1, 2, 3, 4, 5, 6], 2));

//4

function convert(number) {

    var outputArray = [];
    var str = "";
    str += number;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            continue;
        }

        outputArray[outputArray.length] = parseInt(str[i]);
    }

    return outputArray;

}

console.log(convert(78.96));

//5

function multTable() {
    var str = "";

    for (var i = 1; i <= 12; i++) {
        for (var j = 0; j <= 12; j++)
            str += "The product of " + i + " and " + j + " is " + i * j + "." + "\n";
    }
    return str
}

console.log(multTable(12))

//6    F=1.8c + 32

function cToF(celsius) {

    far = 1.8 * celsius + 32;
    return far;
}

console.log(cToF(15));


//7 

function findMaximum(array) {
    var max;
    var nonStringElements = "";
    for (var i = 0; i < array.length; i++) {
        for (var j = 1; j < array.length; j++) {
            if (typeof array[i] === "number") {
                if (array[i] > array[j]) {
                    max = array[i]
                }
            } else {
                nonStringElements += array[i];
            }

        }
    } console.log(nonStringElements);
    return max;
}
console.log(findMaximum([1, 3, 6, 2, 4, 8, "b", 15, "a"]));



//1 


(function (arr) {
    var x = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = x;

    return console.log(arr)
})([4, 5, 11, 9]);

//2

(function (a, b) {
    var surf;
    surf = a * b;

    return console.log(surf)
})(4, 5)

    //3

    (function (word) {
        var newWord = "";
        for (var i = 0; i < word.length; i++) {

            if (word[i] === "m" || word[i] === "M") {
                word[i] = "*";
                newWord[newWord.length] += word[i];

            }
        }
        return console.log(newWord);
    }

    )("programMing")