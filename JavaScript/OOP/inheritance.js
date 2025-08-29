// inheriting property of another class into some other class

class vechile
{
    // functions defined inside the class know as methods

    constructor(make, model)
    {
        this.make = make
        this.model = model
    }

    start()
    {
        return `${this.model} totoya presented by ${this.make}`;
    }
}

class Car extends vechile{
    drive()
    {
        return `${this.make} : this is an inheritance example`;
    }
}

let myCar = new Car("TATA", "BMW")
console.log(myCar.start(), myCar.drive());
