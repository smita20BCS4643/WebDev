function greet(name)
{
    console.log("hello", name);
    
}

// ---- above mentioned function is normal one

// here is constructor function

function Person(name, age)
{
    this.name = name;
    // both the names are different
    // this keyword pointing to the different name which is user defined
    // and name after assignment operator is different
    
    this.age = age;
}

function Car(Make, Model)
{
    this.Make = Make;
    this.Model = Model
}

// creating object to acceess the constructor function
let myCar = new Car("Toyota", "Camry")
console.log(myCar);

// use of new --- and this have internal linking and that gives context
// its referring to newly created object

function Tea(type)
{
    // in constructor function there is must to write the this keyword

    this.type = type
    this.descripe = function()
    {
        return  `this is cup of tea ${this.type}`
    }
}

let LemonTea = new Tea("lemon Tea")
console.log(LemonTea.descripe());


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


// -------------abput errors


function Drink(name)
{
    if(!new.target)
    {
        throw new Error(" Drink must be called with new KeyWord")

    }
    this.name = name;
}

let coffee = new Drink("Tea");
let Macha = Drink("its Not a coffee its a Tea");