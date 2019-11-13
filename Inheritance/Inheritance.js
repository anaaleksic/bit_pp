//Employees and Managers

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
Person.prototype.fullName = function () {
    return this.name + " " + this.surname;
}

Person.prototype.printInfo = function () {
    console.log(this.fullName());
}


function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.salary = salary;
    this.job = job;

}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.info = function () {
    console.log("ola cikas" + ", " + this.fullName() + " " + "my job is " + this.job + " my salary is " + this.salary);

}
var mikaPeric = new Employee("Mika", "Peric", "drawing", "250");
mikaPeric.info();


function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;


}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;


Developer.prototype.info = function () {
    console.log("Ola Cikas" + ", " + this.fullName() + " " + "my job is " + this.job + " my salary is " + this.salary + " my specialization is " + this.specialization);

}

Developer.prototype.getSalary = function () {
    return this.salary;
}
/*Developer.prototype.increaseSalary() {
    return this.salary += 10;
}
*/

var peraMikic = new Developer("Pera", "Mikic", "drawing", "250", "BackendDeveloper");
peraMikic.info();


function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;


Manager.prototype.info = function () {
    console.log("Ola Cikas" + ", " + this.fullName() + " is in the house " + "my job is " + this.job + " my salary is " + this.salary + " my department is " + this.department);

}

var anaVladana = new Manager("Ana", "Vladana", "drawing", "250", "economy");
anaVladana.info();

