function outer()
{
    let counter = 1;

    return function()
    {
        counter++;
        return counter;
    }
}


let inner = outer();

console.log(inner());
console.log(inner());
console.log(inner());


// when we calling the function we are calling the inner function which is return function one

// but when we see the output it is 2 ,3 , 4 
// means it regaining / retaining the memory of function