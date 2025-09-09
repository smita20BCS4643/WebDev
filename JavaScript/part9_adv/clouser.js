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
