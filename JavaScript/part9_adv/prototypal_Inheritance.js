function Person(name)
{
    this.name = name;
}


Person.prototype.greet = function(){
    console.log(`hello ${this.name}`);
    
}

let NewName = new Person("smita")
NewName.greet();


// ability to inject in the constructor funtion object inherit property of another object by prototype chaining
