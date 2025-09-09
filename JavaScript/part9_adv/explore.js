// here we are going to understand asychoronization in js


console.log("Hellor");

function SayHello()
{
    console.log("Saying Hello from method");
    
}

setTimeout( () => {
    SayHello()
}, 4000);

setTimeout(() => {
    SayHello()
}, 2000);

// timer function is did not supported by js

//so it followes a path of event loop ---

// first code goes to the call stack and then to event loop check for the method to run or execute 
// if not completed at that time it moves that function(like network and timerr which is not subpported by js)
// it goes to the environment / browser it will execute there and then come to queue 
// queue has 2 options normal queue and vip queue
// then goes to event loop -- after completely execution sends to call stack back -- after execution

for(let index = 1; index<5; index++)
{
    console.log(index);

}


// flow of the execution will be not as we wrote the functions
// it will print log then for loop and then timer one 
// because it takes time to execute.

