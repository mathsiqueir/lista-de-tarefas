let taskLists = [
  { id: "1", title: "Estudos", tasks:[{id: '1',title: 'estudar a noite', completed: true}] },
  { id: "2", title: "tarefas de casa",tasks:[] },
  { id: "3", title: "tarefas do trabalho",tasks:[] },
];
module.exports = {

  getAllTaskLists:() =>{
    return taskLists;
  },

  getTaskById:(id)=> {
    const item = taskLists.find((item) => item.id === id);
    return item
  },

  createList:(title)=> {
    const task = {
      id: Math.floor(Math.random()*999).toString(),
      title: title,
      tasks:[],
    };
    return task
  },

  saveList(list) {
    if (taskLists.title === " ")
      throw new console.error("titulo da lista não pode ser vazio");
    taskLists.unshift(list);
  },
  deleleList(id){
    const listIndex = taskLists.findIndex(item =>item.id === id)
    taskLists.splice(listIndex,1)
  },

  addTask(listId, taskTitle) {
    const newTask = {
      id: Math.floor(Math.random()*999).toString(),
      title: taskTitle,
      completed: false
    };
    taskLists.find((item) => item.id === listId).tasks.push(newTask)
  },
  completeTask: (listId,taskId)=>{
    const taskList = taskLists.find(item => item.id === listId)
    const task = task.tasks.find(task => task.id === listId)
    task.completed = true
  },
  undoTask(id) {
    const taskList = taskLists.find(item => item.id === listId)
    const task = task.tasks.find(task => task.id === listId)
    task.completed = false
  },
};
