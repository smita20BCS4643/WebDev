/*

1. Write a for loop that loops through array "green tea", "black tea", "chai", "oolong tea" and stops the loop when it finds chai

store alll teas before "chai " in nre array named selectedTeas

*/

// let array = ["green tea", "black tea", "chai","oolong tea"];
// let selectedTeas = [];

// for(let index = 0; index <= array.length; index++)
// {
//      if(array[index] == "chai")
//      {
//         break;
//      }
//      else{
//          selectedTeas.push(array[index]);

//      }
// }

// console.log(selectedTeas);


/*
2. write a for loop that loops through the array ["london", "Newy York", "Paris", "Berlin"] and skips 
paris store the other citites in ner array named visitedCities
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for(let i = 0; i<=cities.length; i++)
{
    if(cities[i] !== "Paris")
    {
        visitedCities.push(cities[i]);
    }

}

console.log(visitedCities);
