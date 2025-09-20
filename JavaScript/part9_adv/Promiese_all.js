function getBlogPostData()
{
    return new Promise((resolve, reject)=>{

        setTimeout( ()=>{
            resolve(" Blog Post Data")   
    },3000);
    })
   
}

function getComment()
{
    return new Promise((resolve, reject)=>{

        setTimeout( ()=>{
           resolve("Commens has been fetched")
    },3000);
    })
   
}

async function getParameters() {
    try{
          console.log("Fetching the data/info.....");
        //   const blog = await getBlogPostData();
        //   const comment = await getComment();

        const[post,comment] =  await Promise.all([getBlogPostData(),getParameters()])

          console.log("Blog Post", blog);a
          console.log(("Comment on Post", comment));

          console.log("Fetching Done");
          
          
    }
    catch(error){
        console.error("Error Occured while Fetching the Data")
    }
    
}

getParameters()