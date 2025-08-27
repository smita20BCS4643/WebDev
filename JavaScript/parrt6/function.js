/*

1. write a function named 'Make Tea' that takes one paramenter name `typeOfTea` and returns a
string "making green tea" when called with "green tea",
Store the result in a varible named 'teaOrder'
*/
function makeTea(tyoeIfTea)
{
    return "making" + " " + tyoeIfTea;
};

makeTea("green tea");

/*

2 . create function named "orderTea" that takes one parameter 'teatype
inside this function create another function named confirmorder that returns a message like "order confiremend for chai"
call "confirmorder" from within orderTea and return the result.
*/

function orderTea(teaType)
{
    function confirmOrder()
    {
        return `Order has been confirmed`;
    }

    return confirmOrder()
}

let orderConfirmation = orderTea("New tea")
console.log(orderConfirmation);


/*
3. write an arrow function named 'CalculateTotal" that takes two parameters "price" and "quantity"
the function should return the total cost by multiplying the price and quantity

*/

// -----------------regular function------------------
function CalculateTotal(price, quantity)
{
    return (price * quantity);
}

let Calculate = CalculateTotal(10,23)
console.log(Calculate);


// -----------------ARROW FUNCITON----------

const CalculateTotal1 = (price, quantity) => price * quantity

// {    // return (price*quantity);

// }


let Calculate2 = CalculateTotal1(10,23)
console.log(Calculate2);


/*
4. 
write a function named "processTeaOrder" that takes another function "makeTea" as a parameter and calls it with the argument "earl grey"
return thr result of calling "makeTea"

*/

function makeTea(typeOfTea)
{
    return `this is make tea: ${typeOfTea}`;
}
 function processTeaOrder(teaFunction){
   return teaFunction("earl grey")

}

let order = processTeaOrder(makeTea)
console.log(order);


/*

write a function named 'createTeaMaker' that returns another function. The returned function should take one
parameter 'teaType' and return a message like "making tea green tea"  
store the returned function in variable named 'teamaker' and call it with green tea
*/

function another(teaType)
{
    return `making green tea ${teaType}`;
}

function createTeaMaker(secFun)
{
    return secFun("green Tea");

}

let teamaker = createTeaMaker(another)
console.log(teamaker);
