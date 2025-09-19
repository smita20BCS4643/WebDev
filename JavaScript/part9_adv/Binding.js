const person = {
    name:"mita",
    greet()
    {
        console.log(`hi, I am ${this.name}`)
    }
};


person.greet();

// ---------------------
const greet_fun = person.greet
// trying to tranfer one varibale to another but it is not possible so below we will use binding
greet_fun()
// ----------------------------



const greet_binding_fun = person.greet.bind({name:"smita"});

greet_binding_fun()