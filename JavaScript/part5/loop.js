/*
 write a while loop that calculates the sum of all numbers from 1 to 5 and stores the result in varibale named sum


*/
let i = 1;
let sum =0;
 while (i<=10) {
    sum += i;
    i++;
 }
 console.log(sum," ");


 /*
 write a while loop that counts down form 5 to 1 and stores the numbers in array named CountDown
 */
let CountDown = [];

while(i!=0)
{
    CountDown.push(i);
    console.log(i);
    i--;
    
} 
console.log(CountDown);

/*
 3. write a do whule loop that prompts a user to enter their favorite tea type until they enter stop
 store each tea type in an aray named "Tea Collection"
*/


//  let TeaCollection = [];
//  let tea;
// do {

//     //   tea = prompt(`Enter your fav tea`);
//      if(tea !== "stop")
//      {
//         TeaCollection.push(tea)
//      }
    
// } while (tea !== "stop");

/*

4. Write a do while loop that adds numbers from 1 to 3 and stores the result in a varibale named total
*/

let add = 0;
let j = 3;
do {
    add = add + j;
    j--;
    
} while (j>0);
console.log(add);



/*
Write a for loop that multiplies each element in the array [2, 4, 6] by 2 and stores the results in a new named arrat 
mulitpledNumbers
*/
let mulitpledNumbers = [];

let array = [2,4,6]

for (let index = 0; index < array.length; index++) {
    mulitpledNumbers.push(array[index] * 2);    
}
console.log(mulitpledNumbers);


/*
write a for loop that lists all the cities in the array ["paris", "new york", "tokyo", "london"]
and stores each city in new array named cityList
*/

let cities = ["paries","new york", "tokyo", "london"];
let cityList = [];

for(let n =0; n <cities.length; n++)
{
    cityList.unshift(cities[n]);
}
console.log(cityList);
