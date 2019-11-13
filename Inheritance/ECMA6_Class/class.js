//Employees and Managers

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name}, ${this.surname}`;
    }

    getPrintInfo() {
        console.log(this.getFullName());
    }
}

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.salary = salary;
        this.job = job;
    }

    getInfo() {
        var full = super.getFullName()
        console.log(`ola cikas ${full} my job is  ${this.job} my salary is ${this.salary}`);

    }
}
var mikaPeric = new Employee("Mika", "Peric", "drawing", "250");
mikaPeric.getInfo();


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;

    }

    AllInfo() {
        console.log(`${super.getFullName()} my specialization is ${this.specialization}`);

    }

    getSalary = function () {
        return this.salary;
    }

}

/*Developer.prototype.increaseSalary() {
    return this.salary += 10;
}
*/

var peraMikic = new Developer("Pera", "Mikic", "drawing", "250", "BackendDeveloper");
peraMikic.AllInfo();


class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }

    printInfo() {
        console.log(`${super.getFullName()} my department is  ${this.department}`);

    }
}

var anaVladana = new Manager("Ana", "Vladana", "drawing", "250", "economy");
anaVladana.printInfo();

