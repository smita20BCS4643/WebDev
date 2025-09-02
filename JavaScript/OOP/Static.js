class Calculator
{
      static add(a, b)
    {
        return a+b
    }
}

// let minCal = new Calculator();

// console.log(minCal.add(2,4));  
// it will give error


// when we remove the static word in front of add --- it will give result

console.log(Calculator.add(2,3)); // it will give correct answer without using object
