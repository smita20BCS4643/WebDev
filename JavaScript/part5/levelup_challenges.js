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
        continue;
        
    }

}

console.log(visitedCities);


/*
 user a for of loop to iterate through the array [ 1, 2, 3, 4 ,5] and stop when 4 is found.
 store the numbers before 4 in an arrya named SmallNumbers

*/
let numbers = [1,3,2,4,5]
let SmallNumbers = []

for (const num of numbers) {
    // console.log(num);
    if(num != 4)
    {
       SmallNumbers.push(num);
     continue;
    }
    console.log(SmallNumbers);
    
    
}

/*
4. use a for of loop to itreate through the array [chai, green tea, hearbal tea, black tea]
 and skip herbal tea and store in another array

 */

 let chaiarray =["green tea" , "chai", "herbal tea", "black tea"];
 let newchai =[];

 for (const eachchai of chaiarray) {
    if(eachchai == "herbal tea")
    {
       continue;
    }
    newchai.push(eachchai);
    
 }
 console.log(newchai);

 
 

/*
5. use for in loop to loop through an object containing city populations.
stop the loop when the population of berline is found and store all the previous populations in a new object named
cityPopulations

let citiesPopulation = {
"london" : 89909898,
"new york" : 8409043,
"paris": 22556544,
"berlin": 342342323
};

*/

// let citiesPopulation = {
// "london" : 89909898,
// "new york" : 8409043,
// "paris": 22556544,
// "berlin": 342342323
// };

// let cityPopulations = []

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }