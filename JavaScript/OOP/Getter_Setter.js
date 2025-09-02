/// getter and setters

class Employee {
    constructor(name, salary)
    {
        this.name = name
        this._salary = salary
    }

    get salary()
    {
        return `you are not allowed to see the salary`;
    }

    set salary(value)
    {
        // _ if underscore is defined in code means getter and seetter are coming on the way 
        // but it doesn't set the values
    }
}



let emp = new Employee("Alice", 65464636)
console.log(emp._salary);

