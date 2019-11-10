
"use strict"
/* 1. 
Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like! 
*/

var coffee = {
    name: 'cappuccino',
    strength: 'medium',
    flavour: 'caramel',
    milk: 'yes',
    sugar: 'no',
    whippedCream: 'yes',
    type: 'cup'
};
console.log(coffee);

/* 2.
Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 
*/

var favoriteMovie = {
    title: "Pride and Prejudice",
    leadFemale: "Keira Knightley",
    leadMale: "Matthew Macfadyen",
    director: "Joe Wright",
    year: 2005,
    popularity: 7.8
};
console.log(favoriteMovie);

/* 3.
Write a function that creates an object that represent a computer program. 
Each program is described by: description,  programming language, git repository, 
boolean status that says if the program is completed or not.
 Add a method that prints out program’s repository,  
 a method that checks if the program is written in JavaScript 
 as well as a method that checks if program is completed or not.
*/



function computerProgram(programmingLanguage, description, gitRepository, isCompleted) {

    return {
        programmingLanguage: programmingLanguage,
        description: description,
        gitRepository: gitRepository,
        isCompleted: isCompleted,

        printRepository: function () {
            return this.gitRepository;
        },
        checkIfIsJS: function () {
            if (this.programmingLanguage === "JavaScript") {
                return true;

            } else {
                return false;
            }
        },
        printCompletedProgram: function () {
            if (this.isCompleted === "true") {
                console.log("Yes")
            } else {
                console.log('Its not completed!')
            }
        }
    }
}
console.log(computerProgram("JavaScript", "JavaScript is the programming language of HTML and the Web", "bitpp", true));
var program = computerProgram("JavaScript", "JS  is a dynamic computer programming language.", "Bit_pp", true);
program.printRepository();
program.checkIfIsJS();
program.printCompletedProgram();

// var phpProgram = computerProgram("PHP", "backend", "bit_php", false)
// phpProgram.printRepository();
// phpProgram.checkIfIsJS();
// phpProgram.printCompletedProgram();


//drugi nacin
function createProgram(a, b, c, d) {

    var program = {
        description: a,
        programming_language: b,
        git_repository: c,
        isCompleted: d
    };

    return program;
}

function printRepository(input) {

    console.log(input.git_repository);
}

var compProgram = createProgram("blabla", "csharp", "bitpp", "true");

printRepository(compProgram);

function checkIfJS(obj) {

    if (obj.programming_language === "JavaScript") {
        return true;
    }

    return false;

}

function checkIfCompleted(obj) {

    if (obj.isCompleted) {
        return true;
    }

    return false;

}


console.log(checkIfJS(compProgram));
console.log(checkIfCompleted(compProgram));






/*4.
Write a function that creates an object that represents a culinary recipe.
Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
Add a method that prints out all the ingredients necessary for the meal preparation.
Add a method that checks if a meal can be prepared for 15 minutes.
Add a method that changes the type of cuisine to the given value.
Add a method that delete a given ingredient from the list of ingredients.

*/

function createRecipe(name, typeOfCuisine, complexity, listOfIngredients, preparingTime, preparingInstruction) {
    return {
        name: name,
        typeOfCuisine: typeOfCuisine,
        complexity: complexity,
        listOfIngredients: listOfIngredients,
        preparingTime: preparingTime,
        preparingInstruction: preparingInstruction,


        printIngredients: function () {
            var ingred="";
            for (var i = 0; i < listOfIngredients.length; i++){
               ingred +=listOfIngredients[i] + ' ';
            }
            return listOfIngredients;
        },
    }

}

var italian = createRecipe("pizza", "italian", "medium", ["tomatoes", "cheese", "ham", "olives"],"10min","Prvo napravi testo za picu pa dodaj slojeve...");
var res = italian.printIngredients();
console.log(res);








// KONSTRUKTORSKE FUNKCIJE


/* 3.
Write a function that creates an object that represent a computer program. 
Each program is described by: description,  programming language, git repository, 
boolean status that says if the program is completed or not.
 Add a method that prints out program’s repository,  
 a method that checks if the program is written in JavaScript 
 as well as a method that checks if program is completed or not.
*/

function ComputerProgram(programmingLanguage, description, gitRepository, isCompleted) {


    this.programmingLanguage = programmingLanguage;
    this.description = description;
    this.gitRepository = gitRepository;
    this.isCompleted = isCompleted;


    this.printRepository = function () {
        return this.gitRepository;
    }

    this.checkIfIsJS = function () {
        if (this.programmingLanguage === "JavaScript") {
            return true;

        } else {
            return false;
        }
    }
    this.printCompletedProgram = function () {
        if (this.isCompleted === "true") {
            console.log("Yes")
        } else {
            console.log('Its not completed!')
        }
    }
}
var program = new ComputerProgram("JavaScript", "JS  is a dynamic computer programming language.", "Bit_pp", true);
program.printRepository();
program.checkIfIsJS();
program.printCompletedProgram();




/*4.
Write a function that creates an object that represents a culinary recipe.
Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
Add a method that prints out all the ingredients necessary for the meal preparation.
Add a method that checks if a meal can be prepared for 15 minutes.
Add a method that changes the type of cuisine to the given value.
Add a method that delete a given ingredient from the list of ingredients.

*/

function Recipe(name, typeOfCuisine, complexity, listOfIngredients, preparingTime, preparingInstruction) {
    this.name = name;
    this.typeOfCuisine = typeOfCuisine;
    this.complexity = complexity;
    this.listOfIngredients = listOfIngredients;
    this.preparingTime = preparingTime;
    this.preparingInstruction = preparingInstruction;


    this.printIngredients = function () {
        var ingred = "";

        for (var i = 0; i < this.listOfIngredients.length; i++) {
            ingred += this.listOfIngredients[i] + ' ';
        }

        return ingred;
    }
}

var serbian = new Recipe("pizza", "italian", "medium", ["tomatoes", "cheese", "ham", "olives"],"10min","Prvo napravi testo za picu pa dodaj slojeve...");
var res = serbian.printIngredients();
console.log(res);





