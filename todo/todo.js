const { log } = require('console')
const fs = require('fs')
const filepath = "./tasks.json"

const loadTasks = () =>{
    try {
        const dataBuffer = fs.readFileSync(filepath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(error){
        return []
    } 
}
const listTasks = () => {
    const tasks = loadTasks()
    tasks.forEach((task , index) => console.log(`${index +1} - ${task.task}`));
};
const saveTasks = (tasks) => {
   const dataJSON =  JSON.stringify(tasks)
   fs.writeFileSync(filepath , dataJSON);
};
const addTask = (task) => {
    const tasks = loadTasks()
    tasks.push({task});
    saveTasks(tasks); 
    console.log("task added", task);
    
};
const command = process.argv[2];
const argument= process.argv[3];
if(command === 'add'){
    addTask(argument)
} else if(command === "list"){
    listTasks();
}
else if( command === "remove"){
    removeTask(parseInt(argument));
}
else{
    console.log("command not found!");
    
}