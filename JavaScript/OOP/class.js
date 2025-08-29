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
        return `${this.model} totoya presented by ${this.make}`
    }
}


let printth = new vechile("smita", "shinde")

console.log(printth);
console.log(printth.start());


