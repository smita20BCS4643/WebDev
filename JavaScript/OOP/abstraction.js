class coffee
{
    start()
    {
        //call DB
        // filer Value

        return ` Starting the machine`;
    }

    brewCoffee()
    {

    
    //complex calculation
    return `brewing coffee`;
    }


    pressStartButton()
    {
        let msg1 =this.start()
        let msg2 = this.brewCoffee()

        return `this would be my ${msg1} and ${msg2}`;
    }

}

let MyMachine = new coffee();
console.log(MyMachine.start());
console.log(MyMachine.brewCoffee());


console.log(MyMachine.pressStartButton());



