/* Zadatak 1. Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like! */


var cofee = {
    name: 'Grand',
    strength: 'strong',
    flavour: 'vanilla',
    milk: 'yes',
    sugar: 'yes'
}


/* Zadatak 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.  */


var movie = {

    title: 'Mrtav ladan',
    actors: 'Srdjan Todorovic , Nenad Jezdic',
    director: 'Pera',
    genre: 'comedy',

}

/* Zadatak 3.
Write a function that creates an object that represent a computer program.
 Each program is described by: description,  programming language, git repository,
 boolean status that says if the program is completed or not. Add a method that prints out program’s repository,
   a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not.
 */






function createProgram(description, programmingLanguage, gitRepository, status) {
    var program = {
        description: description,
        programmingLanguage: programmingLanguage,
        gitRepository: gitRepository,
        status: status,
        print: function () {
            return this.gitRepository;
        },
        isJavaScript: function () {
            if (this.programmingLanguage === 'JS') {
                return true;
            }

            return false;
        }
    }

    return program;
}

var pp = createProgram('Bla bla', 'JavaScript', 'bit_pp', false);
var c = createProgram('One more program', 'C++', 'core_js', true);

// pp.print();
// c.print();

console.log(pp.isJavaScript())





/* Zadatak 4. 
Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name,
 type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.
 */

'use strict'

function createObject(writename, typeofcusine, from1to5, ingredients, prepairingtime, instructionForPrepairing) {

    var recipe = {
        name: writename,
        type: typeofcusine,
        complexity: from1to5,
        list: ingredients,
        time: prepairingtime,
        instruction: instructionForPrepairing,
        print: function () {
            return this.list;
        },

        timePrepar: function () {
            if (this.time < '15') {
                return 'This meal can be prepar for 15. minutes or less.';
            } return 'You need more time for preparing!';
        },
        change: function () {
            return this.type = 'Italian';
        },
        deleteItem: function (n) {
            var newlist = [];

            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] !== n) {
                    newlist[newlist.length] = this.list[i];

                }

            }

            this.list = newlist;
        }
    }
    return recipe;
}

var cake = createObject('Rafaelo', 'Serbian', '2', ['Milk', 'Chocolate', 'Sugar'], '8', 'Be careful!')

console.log(cake);

cake.deleteItem('Sugar');
console.log(cake);




/////////////////////////////////////////////////////////////////////////////////

/* KONSTRUKTORSKE FUNKCIJE */


/* Zadatak 3.
Write a function that creates an object that represent a computer program.
 Each program is described by: description,  programming language, git repository,
 boolean status that says if the program is completed or not. Add a method that prints out program’s repository,
   a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not.
 */


function CreateProgram(first, second, third, fourth) {

    this.description = first;
    this.programmingLanguage = second;
    this.gitRepository = third;
    this.status = fourth;
    this.print = function () {
        return this.gitRepository;
    },
        this.isJavaScript = function () {
            if (this.programmingLanguage === 'JS') {
                return true;
            }
            return false;
        }
}
var PPrinciples = new CreateProgram('Bla bla', 'JavaScript', 'bit_pp', false);
var JSPrinciples = new CreateProgram('ABC ABC', 'C++', 'bit_web', true);

console.log(PPrinciples);
console.log(JSPrinciples);


/* Zadatak 4. 
Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name,
 type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.
 */

'use strict'

function CreateObject(writename, typeofcusine, from1to5, ingredients, prepairingtime, instructionForPrepairing) {

    this.name = writename;
    this.type = typeofcusine;
    this.complexity = from1to5;
    this.list = ingredients;
    this.time = prepairingtime;
    this.instruction = instructionForPrepairing;
    this.print = function () {
        return this.list;
    },
        this.timePrepar = function () {
            if (this.time < '15') {
                return 'This meal can be prepar for 15. minutes or less.';
            } return 'You need more time for preparing!';
        },
        this.change = function () {
            return this.type = 'Italian';
        },
        this.deleteItem = function (n) {
            var newlist = [];

            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i] !== n) {
                    newlist[newlist.length] = this.list[i];
                }
            }
            this.list = newlist;
        }
}

var cake = new CreateObject('Rafaelo', 'Serbian', '2', ['Milk', 'Chocolate', 'Sugar'], '8', 'Be careful!')

console.log(cake);

cake.deleteItem('Sugar');
console.log(cake);



