/*
var a = 0;
var num = "";


for (var a = 0; a < 15; a++) {
    if (a % 2 === 0) {
        console.log("number is even");
    }
    else {
        console.log("num is odd");
    }
}

*/

var b = 0;
var re = 0;

for (var b = 0; b < 1000; b++) {
    if (b % 3 === 0) {
        if (b % 5 === 0) {
            re = re + b;
        }

    }
}
console.log(re);

//3.

var n = [1, 2, 3, 4, 5, 6];
var sum = 0;
var pro = 1;


for (var i = 0; i < n.length; i++) {
    sum = sum + n[i];
    pro = pro * n[i];
}
console.log("sum: " + sum + " pro: " + pro);



console.log("\n");//novi red

var n = [1, 2, 3, 4, 5, 6];
var sum = 0;
var pro = 1;
var i = 0;

while (i < n.length) {

    sum = sum + n[i];
    pro = pro * n[i];
    i++

}
console.log("sum: " + sum + " pro: " + pro);









var n = [1, 2, 3, 4, 5, 6];
var sum = 0;
var pro = 1;
var i = 0;

while (i < n.length) {

    sum = sum + n[i];
    pro = pro * n[i];
    i += 2

}
console.log("sum: " + sum + " pro: " + pro);












