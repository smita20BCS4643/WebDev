const fs = require("fs");
const { parse } = require("path");

const FilePath = "./task.json";

 
// load Task

const loadTask = () => {
    // we hav imported fs 
    try{
        // we do have readFile which is Async
        // but we can't move ahead without getting the data that is why we use synchronous 
         const dataBuffter = fs.readFileSync(FilePath)

         // databuffter is not string so we have to convert it into String

         const dataJSON = dataBuffter.toString()

         // so this dataJSON is not normal JSON so we use parse

         return JSON.parse(dataJSON);
    }
    catch(error){
        return []

    }
    
}

const saveTask = (tasks) =>{
    const dataJSON =JSON.stringify(tasks);
    fs.writeFileSync(FilePath, dataJSON);
};


// add Task before that we have to load the task

const addTask = (task) => {
     
    const tasks = loadTask();
    tasks.push({task});
    saveTask(tasks);
    console.log("Task added", task);

};

const listTask = () =>{
    const tasks = loadTask();
    tasks.forEach((task, index) => console.log(`${index+1} - ${task.task}`));
    
}
// grabbing the command 

const command = process.argv[2];
const argument = process.argv[3];

if (command === 'add')
{
    addTask(argument)
}
else if(command  === "list")
{
    listTask();
}
else if (command === "remove")
{
    removeTask(parseInt(argument))
}