/*
 1. Declare an array named  `teaFlavors` that contains the strings `"green tea" , "Black tea", " oolong tea"
 `

 Acess the first element of the array and store it in a variable named `firstTea`
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

firstTea = teaFlavors[0];

console.log(firstTea);


/*
2. Declare an array named cities containing "london", "tokoyo", and "paries" and "new york"

Access the third element in the array and sore it in a variable named 'favoriteCity
*/

let Cities =  ["London", "Paries", "New York", "Tokyo"]

favoriteCity = Cities[3]

console.log(favoriteCity);


/*
 3. Your have an array named 'teaTpes' containing "herbal tea", "white tea", "masala tea"
 chance the 2nd element of the array to "Jasmine tea"
 */

 let teaTypes = ["heabl tea", "white tea", "masala tea"];

console.log(teaTypes);


teaTypes[2] = "Jasmine tea";

console.log(teaTypes)


/*
4. Declare an array named 'citiesVisited containing "mumbai" and "sydney".
add "berlin" to the array using the "push method"
*/

let citiesVisited = ["mimbai", "sydeny"];
citiesVisited.push("berlin");

console.log(citiesVisited);


/*
5. you have anarray named 'teaorders with "chai", "iced tea", "matcha" and "earl grey".

remove the last elemnt of array using the pop method and sote it in a variable named LastOrder

*/

let tedorders = ["chai", "iced Tea", "matcha", "earl grey"]
lastorder = tedorders.pop()
console.log(tedorders);
console.log(lastorder);

/*
6.  you have an array named "popularteas containg "grean tea", "oolog tea", "chai"
create a softcopy of array named softcopyTeas 
*/

let popularTeas = ["green tea", "oolong Tea","chai"];
let softcopyTeas = popularTeas;
popularTeas.pop();
console.log(softcopyTeas);

soft = popularTeas.copyWithin();
console.log(soft);

/*
7. you have an array named 'topcities' containing "berlin", "singapore", and "new York".
create a hardcopy of array named Hardcopycities
*/

let topCities = ["berlin", "singapore", "new York"]
let Hardcopycities = [...topCities];
console.log(topCities);
console.log(Hardcopycities);

topCities.pop();
console.log(Hardcopycities);
console.log(topCities);

/*
8. you have two arrays "europeancities containing "paries" and "rome" and "asiancities" containing "tokyo" and "bangkok"
merge two array into a new array named worldCities

*/

let europeancities = ["Paries", "Rome"];
let asiancities = ["Tokyo", "bangkok"];

worldCities = [(europeancities) + (asiancities)];

console.log( typeof worldCities);

worldCities = [europeancities , asiancities];
console.log( typeof worldCities);
console.log( worldCities);

