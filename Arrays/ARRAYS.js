
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(months[0] + "," + months[6] + "," + months[9]);



var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(days[6]);





var niz = [2, -4, 5, -2, -11];
var result = "";

if (niz[0] < 0) {
    result = niz[0];
}
if ((niz[1]) < 0) {
    result = result + niz[1];
}
if ((niz[2]) < 0) {
    result = result + niz[2];
}
if ((niz[3]) < 0) {
    result = result + niz[3];
}
if ((niz[4]) < 0) {
    result = result + niz[4];
}
console.log(result);







var nizDva = [5, 15, -5, 20, 12, 18, 72, 14, 9];
var Re = "";

if ((nizDva[0] % 3) === 0) {
    Re = nizDva[0];
}
if ((nizDva[1] % 3) === 0) {
    Re = Re + nizDva[1];
}
if ((nizDva[2] % 3) === 0) {
    Re = Re + "," + nizDva[2];
}
if ((nizDva[3] % 3) === 0) {
    Re = Re + "," + nizDva[3];
}
if ((nizDva[4] % 3) === 0) {
    Re = Re + "," + nizDva[4];
}
if ((nizDva[5] % 3) === 0) {
    Re = Re + "," + nizDva[5];
}
if ((nizDva[6] % 3) === 0) {
    Re = Re + "," + nizDva[6];
}
if ((nizDva[7] % 3) === 0) {
    Re = Re + "," + nizDva[8];
}
if ((nizDva[8] % 3) === 0) {
    Re = Re + "," + nizDva[8];
}

console.log(Re);







var duga = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(duga[0][3]);
console.log(duga[3]);
console.log(duga[2], ",", duga[3]);

