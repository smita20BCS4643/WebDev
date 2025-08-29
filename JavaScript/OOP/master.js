// defining object 

let car = {
    make: "toyoto",
    model : "Camry",
    year: 2020,

    start:function()
    {
        return `${this.make} car got started in ${this.year}`;
    },
};

console.log(car.start());


// prototypal chain
function Animal(species)
{
    this.species = species
}

Animal.prototype.sound = function()
{
    return `${this.species} makes sound`
}

let dog = new Animal("Dog");
let cat = new Animal("Cat")

console.log(dog.sound());
console.log(cat.sound());
