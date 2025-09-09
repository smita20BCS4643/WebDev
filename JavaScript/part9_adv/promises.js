function fetchData()
{
    return new Promise( (resolve, reject) => {

       setTimeout(()=> {

        let success = false;
    
        if(success)
        {
            resolve("Fetch Data Successfully")
        }
        else{
            reject("Could not able to fetch the data")
        }

       })
        
    })
    
}


let response = fetchData()

console.log(response);

// it is showing pending 

// to check the final output we do chaning using (.then) and (.catch)

// if it is successed log then if not then catch error

fetchData()
       .then((data)=>{
        console.log(data);
        
       })
       .catch((error)=>{
        console.error(error);
      
    
       })

    
    // rules need to consider
    // promises always defined by new keyword follwing Promise word
    // new Promise 
    // it takes a callback which is actually takes two parameters __ Resolve and Reject
    // if true then resolve if not then reject -- along with parametors or values passed
    //.then -- it linked with resolve while .catch linked with reject