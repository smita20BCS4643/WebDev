function fetchUserData()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            resolve({name:"chai"})

        }, 30000);
    });

}


async function getUserDate() {
    try{
        console.log("Fetching the Data");
        const  res = await fetchUserData();
        console.log("user data" ,res);
    }
    catch(error){
        console.log("Error Fetching  data",error);

    }
}

getUserDate()