var a = "* * * *";
var size = 4;
for (i = 0; i < size; i++) {
    console.log(a);
}


/////

var a = "";
var size = 10;

for (i = 0; i < size; i++) {
    a += " * "

}
for (i = 0; i < size; i++) {
    console.log(a);
}

//////////////////////////////

var size = 6;
var shape = "";


for (var row = 0; row < size; row++) {
    for (var column = 0; column < size; column++) {
        shape += " * ";
    }

    shape += " \n ";

}
console.log(shape);



///// 
var a = "";
var size = 3;
var shape = ''


for (i = 0; i < size; i++) {
    a += "* ";
    shape += a + "\n";
}

console.log(shape);












